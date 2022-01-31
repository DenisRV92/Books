import React, {useReducer, useState} from 'react';
import style from './Search.module.scss'
import logoBook from '../../img/book.png'
import logoSearch from '../../img/search.png'
import * as axios from "axios";
import Nav from "../Nav/Nav";

export const ContextApp = React.createContext();
// console.log(document.querySelector('input').innerHTML)
const initialState = {
    // categories: ['art', 'biography', 'computers', 'history', 'medical', 'poetry'],
    // booksSearch: [],
    books: []

};

// console.log(ContextApp)
export function reducers(state, action) {

    switch (action.type) {
        case 'booksSearch':
            // debugger
            // if(!state.books.includes(action.id)){
            //     // debugger
            //     return {
            //         ...state,
            //         books: [...state.books, {
            //             category: action.type,
            //             id: action.id,
            //             title: action.title,
            //             img: action.img,
            //             authors: action.authors,
            //             description: action.description
            //         }]
            //     }
            // }
            // else if(state.books.includes(action.id)) {
            //     debugger
            //     return state.books.filter(v=>v!==action.id)
            // }
            // return {
                // ...state,
                // books: [...state.books.map(v => {
                    // debugger
                    // if (v.category===undefined) {
                    //     // debugger
                    //     return {
                    //         category: action.type,
                    //         id: action.id,
                    //         title: action.title,
                    //         img: action.img,
                    //         authors: action.authors,
                    //         description: action.description
                    //     }
                    // }


                // })]

        case 'art':
        case 'biography':
        case 'computers':
        case 'history':
        case 'medical':
        case 'poetry':
            if (!state.books.map(v=>v.id).includes(action.id)) {
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
                        description: action.description
                    }]
                }
            } else {
                debugger
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
    const search = () => {
        setQuest(true);
        state.books.splice(0);
        console.log()
        let book = document.querySelector('input').value
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=20&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk`)
            .then(res => res.data.items.map(v => dispatch({
                type: 'booksSearch',
                id: v.id,
                title: v.volumeInfo.title,
                img: v.volumeInfo.imageLinks,
                authors: v.volumeInfo.authors,
                description: v.volumeInfo.description

            })))
    }
    console.log(state)
    return (
        <ContextApp.Provider value={[state, dispatch, quest, setQuest]}>
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
                            <button onClick={search}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <Nav/>
        </ContextApp.Provider>
    );
};

export default Search;