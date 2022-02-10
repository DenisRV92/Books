import React, {useReducer, useState} from 'react';
import style from './Search.module.scss'
import logoBook from '../../img/book.png'
import logoSearch from '../../img/search.png'
import * as axios from "axios";
import Nav from "../Nav/Nav";

import {Link} from "react-router-dom";
import {ContextApp, initialState, reducers} from "../Reducer/Reducer";

const key = '&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk';
const Search = () => {

    const [state, dispatch] = useReducer(reducers, initialState)
    const [quest, setQuest] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(false);

    const search = (e, page = 0) => {

        setError(false)
        setQuest(true);
        state.books.splice(0);

        let book = document.querySelector('input').value
        console.log(book)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${book}&startIndex=${page >= 1 ? (page - 1) * 10 : 0}${key}&maxResults=12`)
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
            .then(dispatch({
                type: 'loading',
                loading: true,
            }))
            .catch(err => setError(true))

    }

    return (
        <ContextApp.Provider
            value={[state, dispatch, quest, setQuest, search, currentPage, setCurrentPage, error, setError]}>
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
                        <Link to="/">
                            <div className={style.input__button} onClick={() => {
                                search();
                                setCurrentPage(1)
                            }}>
                                <img src={logoSearch} alt=""/>
                                <button>Search
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Nav/>
        </ContextApp.Provider>
    );
};

export default Search;