import React, {useContext, useState} from 'react';
import style from './Nav.module.scss'
import {NavLink, Redirect} from "react-router-dom";
import * as axios from "axios";
import Content from "../Content/Content";
import {ContextApp} from "../Reducer/Reducer";
import NavMobile from "./NavMobile/NavModile";
import MenuLogo from '../../img/Hamburger.png'


const categories = ['art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const key = '&key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk';


const NavBars = (props) => {
    // debugger
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
            url = e.target.innerText;
        }
        setQuest(false)
        state.books.splice(0);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${url}&startIndex=${currentButton * 12}${key}&maxResults=12`)
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
            .then(dispatch({
                type: 'loading',
                loading: true,
            }))
    }

    const [state, dispatch, quest, setQuest, search, currentPage, setCurrentPage] = useContext(ContextApp);
    let NavBar = categories.map(v => <NavBars key={v}
                                              v={v}
                                              setCurrentPage={setCurrentPage}
                                              bookFetch={bookFetch}/>)
    let NavBarMobile = categories.map(v => <NavMobile key={v}
                                                      v={v}
                                                      setCurrentPage={setCurrentPage}
                                                      bookFetch={bookFetch}/>)
    const [menuBurger, setMenuBurger] = useState(false);
    return (
        <>
            <div className={style.nav} onMouseLeave={() => setMenuBurger(false)}>
                <img src={MenuLogo} onClick={() => {
                    menuBurger ? setMenuBurger(false) : setMenuBurger(true)
                }} alt=""/>
                {menuBurger
                    ? NavBarMobile
                    : null}
                <div className={style.container}>
                    {NavBar}
                </div>
            </div>
            <Content bookFetch={bookFetch}/>
        </>
    );
};

export default Nav;