import React, {useState} from 'react';
import style from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const initialState = {
    categories: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],

};


// // }
// function  bookFetch(e) {
// const [state,setState]=useState(e.target.innerHTML)
//     // let books=e.target.innerHTML
//
//
// }
//  useEffect(() => {
//     const getTask = async () => {
//         const res = await axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:History&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk")
//             .then(res => {
//                 return res
//             })
//         console.log(res)
//     }
//
//
//     getTask()
// }, []);
//         const getTask = async () => {
//             const res = await axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:History&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk")
//                 .then(res => {
//                     return res
//                 })
//             console.log(res)

// fetch("https://www.googleapis.com/books/v1/volumes?q=subject:History&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });
// axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:History&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk")
// .then(res=>console.log(res.data))
// .then(data=>console.log(data))
// }
// const book=()=>{
//     //  axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:History&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk")
//     // .then(res=>console.log(res))
//     // .then(data=>console.log(data))
//     const url = "https://www.googleapis.com/books/v1/volumes?q=subject:History&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk";
//     fetch(url)
//         .then(res=>console.log(res))
//     .then(data=>console.log(data))
// //www.googleapis.com/books/v1/volumes?q=subject:History&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk"))
//
// }
const NavBars = (props) => {
    const [state, setState] = useState('')

    const [book, setBook] = useState(' ')

    function bookFetch(e) {
        // if (state==='') {
        setState(e.target.innerHTML)
        if (state === '') {
            // setState(e.target.innerHTML)
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${e.target.innerHTML}&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk`)
                .then(res => console.log(res.data))
            setBook(e.target.innerHTML)
        }
        if (state !== book && state !== '') {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${state}&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk`)
                .then(res => console.log(res.data))
            setBook(e.target.innerHTML)
        }

        // }
        // else {
        //     setState(prevState => console.log(prevState))
        //         // ? prevState
        //         // : e.target.innerHTML)
        // }
// console.log(book)
    }

    // console.log(book)
    // console.log(state)
    // if(state) {
    //     axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${state}&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk`)
    //         .then(res => console.log(res.data))
    // }
    // console.log(state)
    // console.log(book)
    // setBook(e.target.innerHTML)
    // if (state==='') {
    //     setState(e.target.innerHTML)
    //     axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${state}&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk`)
    //         .then(res => console.log(res.data))
    // } else {
    //     setState(prevState => (prevState === e.target.innerHTML)
    //         ? prevState
    //         : e.target.innerHTML)
    //     axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${state}&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk`)
    //         .then(res => console.log(res.data))
    //     // setState(e.target.innerHTML)
    //     // let books=e.target.innerHTML
    //
    //     // console.log(state)
    // }
    // }

    // if (state) {
    //     axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${state}&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk`)
    //         .then(res => console.log(res.data))
    // }
    // console.log(state)
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