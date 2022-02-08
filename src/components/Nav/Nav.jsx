import React, {useContext} from 'react';
import style from './Nav.module.scss'
import {NavLink, Redirect} from "react-router-dom";
import * as axios from "axios";
import Content from "../Content/Content";
import {ContextApp} from "../Reducer/Reducer";
// import {ContextApp} from "../Search/Search";

const categories = ['art', 'biography', 'computers', 'history', 'medical', 'poetry'];

// '&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk';


const NavBars = (props) => {
    return (
        <>
            <NavLink exact to='/'><Redirect exact to='/'/></NavLink>
            <NavLink to={props.v} activeClassName={style.active}>
                <ul onClick={(e) => {
                    props.bookFetch(e);
                    props.setCurrentPage(1)
                }}>
                    <li className={style.nav__item}>
                        {props.v}
                    </li>
                </ul>
            </NavLink>
        </>
    )

}


const Nav = (props) => {
    function bookFetch(e, currentButton = 1, urlName) {
        let url = '';
        if (urlName) {
            url = urlName;
        } else {
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

    const [state, dispatch, quest, setQuest, search, currentPage, setCurrentPage] = useContext(ContextApp);
    let NavBar = categories.map(v => <NavBars key={v}
                                              v={v}
                                              setCurrentPage={setCurrentPage}
                                              bookFetch={bookFetch}/>)

    return (
        <>
            <div className={style.nav}>
                <div className={style.container}>
                    {NavBar}
                </div>
            </div>
            <Content bookFetch={bookFetch}/>
        </>
    );
};

export default Nav;