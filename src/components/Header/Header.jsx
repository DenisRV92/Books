import React from 'react';
import style from './Header.module.scss'
import * as axios from "axios";

const Header = () => {
        return (
        <div className={style.header}>
            <span>BOOKS</span>
        </div>
    );
};

export default Header;