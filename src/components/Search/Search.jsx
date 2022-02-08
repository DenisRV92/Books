import React, {useEffect, useLayoutEffect, useMemo, useReducer, useState} from 'react';
import style from './Search.module.scss'
import logoBook from '../../img/book.png'
import logoSearch from '../../img/search.png'
import * as axios from "axios";
import Nav from "../Nav/Nav";
import Redirect from "react-router-dom/es/Redirect";
import {Link, NavLink} from "react-router-dom";

export const ContextApp = React.createContext();
// console.log(document.querySelector('input').innerHTML)
const initialState = {
    // categories: ['art', 'biography', 'computers', 'history', 'medical', 'poetry'],
    // booksSearch: [],
    books: [],
    // currentPage:1,

};
// &key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk

export function reducers(state, action) {

    switch (action.type) {
        // case 'CURRENT_PAGE':
        //     return {
        //         ...state,
        //         currentPage: action.page
        //     };
        // case 'ERROR': {
        //     return {
        //         ...state,
        //         error: action.error
        //     }
        // }
        case 'booksSearch':
        case 'art':
        case 'biography':
        case 'computers':
        case 'history':
        case 'medical':
        case 'poetry':
            if (!state.books.map(v => v.id).includes(action.id)) {
                // console.log(state.books.map(v=>v.id).includes(action.id))
                //  console.log(action.id)
                return {
                    ...state,
                    books: [...state.books, {
                        category: action.type,
                        id: action.id,
                        title: action.title,
                        img: action.img,
                        authors: action.authors,
                        description: action.description,
                        previewLink: action.previewLink,
                        infoLink: action.infoLink,
                    }],
                    totalItems: action.totalItems
                }
            } else {
                // debugger
                return {
                    ...state,
                    books: [...state.books]
                }
            }
        default:
            return state;
    }

}

// const search=()=>{
//     const book=document.querySelector('input').value
//     axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
//         .then(res=>console.log(res.data.items))
// }
const Search = () => {

    const [state, dispatch] = useReducer(reducers, initialState)
    const [quest, setQuest] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [error,setError]=useState(false);
    // useLayoutEffect(()=>setCurrentPage(currentPage),[currentPage])
    // setCurrentPage(1)
    // const memoizedValue = useMemo(() => currentPage, [currentPage]);
    // console.log();
    const search = (e, page = 0) => {
        // console.log(Object.keys(state).includes('error'));
        // // console.log(window.location.pathname);
        // // window.location.pathname;
        // // setCurrentPage(1);
        // if (Object.keys(state).includes('error')) {
        //     // Object.keys(state)['error']
        //     delete Object.values(state)['error']
        //     console.log(Object.values(state))
        // }
        setError(false)
        setQuest(true);
        state.books.splice(0);
        // const inauthor='inauthor:';
        let book = document.querySelector('input').value
        console.log(book)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${book}&startIndex=${page >= 1 ? (page - 1) * 10 : 0}&maxResults=12`)
            .then(res => res.data.items.map(v => dispatch({
                type: 'booksSearch',
                id: v.id,
                title: v.volumeInfo.title,
                img: v.volumeInfo.imageLinks,
                authors: v.volumeInfo.authors,
                description: v.volumeInfo.description,
                previewLink: v.volumeInfo.previewLink,
                infoLink: v.volumeInfo.infoLink,
                totalItems: res.data.totalItems,

            })))
            .catch(err => setError(true))

    }
    // console.log(Array.from(Array(199).keys()))
    return (
        <ContextApp.Provider value={[state, dispatch, quest, setQuest, search, currentPage, setCurrentPage,error,setError]}>
            <div className={style.search}>
                <div className={style.container}>
                    <div className={style.search__img}>
                        <img src={logoBook} alt=''/>
                        <div className={style.search__text}>
                            <span>ONLINE</span>
                        </div>
                    </div>
                    <div className={style.search__input}>
                        <div className={style.input__input}>
                            <input type="text"/>
                        </div>
                        <div className={style.input__button}>
                            <img src={logoSearch} alt=""/>
                            <Link to="/">
                                <button onClick={() => {
                                    search();
                                    setCurrentPage(1)
                                }}>Search
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Nav/>
        </ContextApp.Provider>
    );
};

export default Search;