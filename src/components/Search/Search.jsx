import React, {useReducer, useState} from 'react';
import style from './Search.module.scss'
import logoBook from '../../img/book.png'
import logoSearch from '../../img/search.png'
import * as axios from "axios";
import Nav from "../Nav/Nav";

import {Link} from "react-router-dom";
import {ContextApp,initialState, reducers} from "../Reducer/Reducer";

// export const ContextApp = React.createContext();

// const initialState = {
//     books: [],
// };

// &key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk

// export function reducers(state, action) {
//
//     switch (action.type) {
//         case 'booksSearch':
//         case 'art':
//         case 'biography':
//         case 'computers':
//         case 'history':
//         case 'medical':
//         case 'poetry':
//             if (!state.books.map(v => v.id).includes(action.id)) {
//                 return {
//                     ...state,
//                     books: [...state.books, {
//                         category: action.type,
//                         id: action.id,
//                         title: action.title,
//                         img: action.img,
//                         authors: action.authors,
//                         description: action.description,
//                         previewLink: action.previewLink,
//                         infoLink: action.infoLink,
//                     }],
//                     totalItems: action.totalItems
//                 }
//             } else {
//                 // debugger
//                 return {
//                     ...state,
//                     books: [...state.books]
//                 }
//             }
//         default:
//             return state;
//     }
//
// }


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
                            {/*<Link to="/">*/}
                            <button>Search
                            </button>
                            {/*</Link>*/}
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