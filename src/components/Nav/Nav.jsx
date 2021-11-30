import React from 'react';
import style from './Nav.module.scss'
// import * as axios from "axios";
const initialState = {
    categories: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],

};


// }
// fetch("https://www.googleapis.com/books/v1/volumes?q=subject:History&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });
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
    return (
        <div>
            <div  className={style.nav__item}>
                {props.v}
            </div>
        </div>
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