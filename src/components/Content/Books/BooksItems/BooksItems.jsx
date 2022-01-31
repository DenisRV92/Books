import React from 'react';
import style from "./BooksItems.module.scss";


const BooksItems = (props) => {
    // console.log(props)
    return (
        // <div className={style.books}>
        <div className={style.page}>
            <div className={style.page__img}>
                {props.img
                    ? <img src={props.img.thumbnail} alt=""/>
                    : <div>'ssss'</div>
                }
            </div>
            {props.title}
            {props.authors}
            {props.description}
        </div>

        // </div>
    )
}

export default BooksItems;