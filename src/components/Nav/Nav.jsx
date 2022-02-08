import React, {useContext} from 'react';
import style from './Nav.module.scss'
import {NavLink, Redirect} from "react-router-dom";
import * as axios from "axios";
import Content from "../Content/Content";
import {ContextApp} from "../Search/Search";

const categories = ['art', 'biography', 'computers', 'history', 'medical', 'poetry'];

// '&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk';

// const [content, dispatch, quest,setQuest,search] = useContext(ContextApp);
// function bookFetch(e,currentButton) {
//     //     // console.log(state)
//         props.setQuest(false)
//         axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${e.target.innerHTML}&startIndex=0&maxResults=20&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk`)
//             .then(res => res.data.items.map(v => props.dispatch({
//                 type: e.target.innerHTML,
//                 id: v.id,
//                 title: v.volumeInfo.title,
//                 img: v.volumeInfo.imageLinks,
//                 authors: v.volumeInfo.authors,
//                 description: v.volumeInfo.description,
//                 previewLink: v.volumeInfo.previewLink,
//                 infoLink: v.volumeInfo.infoLink,
//                 totalItems:res.data.totalItems,
//
//             })))
//     }
const NavBars = (props) => {
// const [state, dispatch, quest, setQuest, search, currentPage, setCurrentPage]= useContext(ContextApp)
    return (
        <>
            <NavLink exact to='/'><Redirect/></NavLink>
            <NavLink to={props.v} activeClassName={style.active}>
                <ul onClick={(e)=>{props.bookFetch(e);props.setCurrentPage(1)}}>
                    <li className={style.nav__item}>
                        {props.v}
                    </li>
                </ul>
            </NavLink>
        </>
    )

}
// let NavBar = initialState.categories.map(v => <NavBars v={v}/>)


const Nav = (props) => {
    function bookFetch(e, currentButton = 1, urlName) {
        // setCurrentPage(1);
        let url = '';
        // state.books.splice(0);
        if (urlName) {
            url = urlName;
            // console.log(url)
        }
        else {
            url = e.target.innerHTML;
        }
        setQuest(false)
        state.books.splice(0);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${url}&startIndex=${currentButton * 12}&maxResults=12`)
            .then(res => res.data.items.map(v => dispatch({
                type: url,
                id: v.id,
                title: v.volumeInfo.title,
                img: v.volumeInfo.imageLinks,
                authors: v.volumeInfo.authors,
                description: v.volumeInfo.description,
                previewLink: v.volumeInfo.previewLink,
                infoLink: v.volumeInfo.infoLink,
                totalItems: res.data.totalItems,

            })))
    }

    const [state, dispatch, quest, setQuest,search,currentPage, setCurrentPage] = useContext(ContextApp);
    let NavBar = categories.map(v => <NavBars key={v}
                                              v={v}
                                              // state={state}
                                              // dispatch={dispatch}
                                              // quest={quest}
                                              setCurrentPage={setCurrentPage}
                                              bookFetch={bookFetch}/>)

    return (
        // <ContextApp.Provider value={[state, props.booksSearch]}
        <>
            <div className={style.nav}>
                <div className={style.container}>
                    {NavBar}
                    {/*{pagination.map((page,index)=><span key={index} className='pagination'>{page}</span>)}*/}
                </div>
                {/*{pagination.map((page,index)=><span key={index} className='pagination'>{page}</span>)}*/}
            </div>
            {/*<div className={style.paginations}>*/}
            {/*    {pagination.map((page, index) => <span key={index} className={style.pagination}>{page}</span>)}*/}
            {/*</div>*/}
            <Content bookFetch={bookFetch}/>
        </>
        // </ContextApp.Provider>
    );
};

export default Nav;