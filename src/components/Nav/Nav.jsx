import React, {useContext, useReducer} from 'react';
import style from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import Content from "../Content/Content";
import {ContextApp} from "../Search/Search";

// export const ContextApp = React.createContext();
const categories = ['art', 'biography', 'computers', 'history', 'medical', 'poetry'];
// const initialState = {
//     // categories: ['art', 'biography', 'computers', 'history', 'medical', 'poetry'],
//     books: []
// };
//
// export function reducer(state, action) {
//
//     switch (action.type) {
//         case 'art':
//         case 'biography':
//         case 'computers':
//         case 'history':
//         case 'medical':
//         case 'poetry':
//             if (!state.books.map(v => v.id).includes(action.id)) {
//                 // console.log(state.books.map(v=>v.id).includes(action.id))
//                 //  console.log(action.id)
//                 return {
//                     ...state,
//                     books: [...state.books, {
//                         category: action.type,
//                         id: action.id,
//                         title: action.title,
//                         img: action.img,
//                         authors: action.authors,
//                         description: action.description
//                     }]
//                 }
//             } else {
//
//                 return {
//                     ...state,
//                     books: [...state.books]
//                 }
//             }
//
//         default:
//             return state;
//     }
//
// }

// export const ContextApp = React.createContext(state);

const NavBars = (props) => {
    // const [state, dispatch] = useReducer(reducer, initialState)
    // const [state,dispatch]=useContext(ContextApp);
    // React.createContext(state);

    function bookFetch(e) {
        // console.log(state)
        props.setQuest(false)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${e.target.innerHTML}&startIndex=1&maxResults=10&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk`)
            .then(res => res.data.items.map(v => props.dispatch({
                type: e.target.innerHTML,
                id: v.id,
                title: v.volumeInfo.title,
                img: v.volumeInfo.imageLinks,
                authors: v.volumeInfo.authors,
                description: v.volumeInfo.description

            })))
        // if(state.books.length!==0){
        //     props.setContent(state)
        // }
        // props.setContent(state)
        // console.log(state)
    }

    // console.log(state)
// if(state.books.length!==0){
//     props.setContent(state)
// }
    // console.log(props.setContent)
// const result=useMemo(()=> {
//    return console.log(state)
// },[state.books.length])
//     console.log(state)

    return (

        <NavLink to={props.v} activeClassName={style.active}>
            <ul onClick={bookFetch}>
                <li className={style.nav__item}>
                    {props.v}
                </li>
            </ul>
        </NavLink>
    )

}
// let NavBar = initialState.categories.map(v => <NavBars v={v}/>)


const Nav = (props) => {
    // console.log(props)
    // debugger
    // const [state, dispatch] = useReducer(reducer, initialState)
    // const [content, setContent] = useState();
    // console.log(state)
    // setContent(state)
    // let content=[];
//     const NavBars = (props) => {
//         const [state, dispatch] = useReducer(reducer, initialState)
//
//         // React.createContext(state);
//
//         function bookFetch(e) {
//             axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${e.target.innerHTML}&maxResults=10&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk`)
//                 .then(function (res) {
//                     res.data.items.map(v => dispatch({
//                         type: e.target.innerHTML,
//                         id: v.id,
//                         title: v.volumeInfo.title,
//                         img: v.volumeInfo.imageLinks,
//                         authors: v.volumeInfo.authors,
//                         description: v.volumeInfo.description
//
//                     }))
//                     // .then(console.log(state))
//                     // console.log(res.status)
//                     // if (state.books.length !== 0) {
//                     //         setContent(state)
//                     //     }
//                 })
//             // if (state.books.length !== 0) {
//             //     setContent(state)
//             // }
//
//
//         }
//         setContent(state)
// // console.log(content)
//         // if (state.books.length % 10 == 0) {
//         //    // console.log(state.books)
//         //         //     // debugger
//         //             setContent(state.books)
//         //         }
//         // console.log(state.books)
//         // console.log(state)
// // const result=useMemo(()=> {
// //   setContent(state.books)
// //     console.log(content)
// // },[state.books.length])
//         // console.log(result)
//         // if (state.books.length !== 0) {
//         //     setContent(state)
//         // }
//         // console.log(content)
//         return (
//
//             <NavLink to={props.v} activeClassName={style.active}>
//                 <ul onClick={bookFetch}>
//                     <li className={style.nav__item}>
//                         {props.v}
//                     </li>
//                 </ul>
//             </NavLink>
//         )
//
//
//     }
    // console.log(state)
    const [state, dispatch, quest, setQuest] = useContext(ContextApp);
    let NavBar = categories.map(v => <NavBars key={v} v={v} state={state}
                                              dispatch={dispatch}
                                              quest={quest}
                                              setQuest={setQuest}/>)
//     // let NavBar = initialState.categories.map(v => <NavBars v={v}/>)
//     const [state, dispatch] = useReducer(reducer, initialState)
//     // React.createContext(state);
//     const NavBars = (props) => {
//         // const [state, dispatch] = useReducer(reducer, initialState)
//         // React.createContext(state);
//
//         function bookFetch(e) {
//             axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${e.target.innerHTML}&maxResults=10&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk`)
//                 .then(res => res.data.items.map(v => dispatch({
//                     type: e.target.innerHTML,
//                     id: v.id,
//                     title: v.volumeInfo.title,
//                     img: v.volumeInfo.imageLinks,
//                     authors: v.volumeInfo.authors,
//                     description: v.volumeInfo.description
//                 })))
//         }
//
// // console.log(result)
//         return (
//
//             <NavLink to={props.v} activeClassName={style.active}>
//                 <ul onClick={bookFetch}>
//                     <li className={style.nav__item}>
//                         {props.v}
//                     </li>
//                 </ul>
//             </NavLink>
//         )
//     //
//     }
// useMemo(()=> console.log(content),[content])
//     console.log(content)
//     let NavBar = initialState.categories.map(v => <NavBars v={v}/>)
    console.log(state)
    return (
        // <ContextApp.Provider value={[state, props.booksSearch]}
        <>
            <div className={style.nav}>
                <div className={style.container}>
                    {NavBar}
                </div>
            </div>
            <Content/>
        </>
        // </ContextApp.Provider>
    );
};

export default Nav;