import React, {useReducer} from 'react';
import style from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const initialState = {
    categories: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
    books: []
};

// let active;
function reducer(state, action) {

    switch (action.type) {
        case 'art':
      if(!state.books.map(v=>v.id).includes(action.id)){
         // console.log(state.books.map(v=>v.id).includes(action.id))
         //  console.log(action.id)
          return {
              ...state,
              books:[...state.books,{
                  id:action.id
              }]
          }
      }
      else {

          return {
              ...state,
              books: [...state.books]
          }
      }

        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

const NavBars = (props) => {
    // const [state, setState] = useState('')
    // const prevCountRef = useRef();
    const [state, dispatch] = useReducer(reducer, initialState)


    function bookFetch(e) {
        // e.target.setAttribute("disabled", 'true')
        // console.log(e.target.getAttribute("disabled")==='true')
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${e.target.innerHTML}&maxResults=10&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk`)
            .then(res => console.log(res.data.items.map(v => dispatch({
                type: e.target.innerHTML,
                id: v.id,
                title: v.volumeInfo.title,
                img: v.volumeInfo.imageLinks,
                authors: v.volumeInfo.authors,
                description: v.volumeInfo.description

            }))))


    }

    console.log(state)

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
let NavBar = initialState.categories.map(v => <NavBars v={v}/>)


const Nav = (props) => {
    return (
        <div className={style.nav}>
            <div className={style.container}>
                {NavBar}
            </div>
        </div>
    );
};

export default Nav;