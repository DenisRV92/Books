import React from 'react';
import style from './Search.module.scss'
import logoBook from '../../img/book.png'
import logoSearch from '../../img/search.png'

const Search = () => {
    return (
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
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;