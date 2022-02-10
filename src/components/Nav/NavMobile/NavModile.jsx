import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import style from "./NavModule.module.scss";

const NavMobile=({v,bookFetch,setCurrentPage})=>{
    // console.log(v)
    return(
        <>
            <NavLink exact to='/'><Redirect exact to='/'/></NavLink>
            <NavLink to={v} activeClassName={style.active}>
                <ul className={style.mobile__nav} onClick={(e) => {
                    bookFetch(e);
                    setCurrentPage(1)
                }}>
                    <li className={style.mobile__item}>
                        {v}
                    </li>
                </ul>
            </NavLink>
        </>
    )
}

export default NavMobile;