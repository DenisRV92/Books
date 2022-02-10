import React, {useContext, useEffect} from 'react';
import style from './Content.module.scss'
import Books from "./Books/Books";
import {ContextApp} from "../Reducer/Reducer";
import ClipLoader from "react-spinners/ClipLoader";
import {css} from "@emotion/react";
// import {ContextApp} from "../Search/Search";from


const Content = (props) => {
    const [content, dispatch, quest, setQuest, search] = useContext(ContextApp);
    const override = css`
            display: block;
            margin: 10vw auto;
 `;
    useEffect(() => {
        if (content.books.length === 12 || content.books.length === content.totalItems) {
            dispatch({
                type: 'loading',
                loading: false,
            })
        }
    }, [content.books.length])

    if (!content) {
        return null
    } else {
        return (
            <div className={style.content}>
                <div className={style.container}>
                    <div className={style.paginations}>
                    </div>
                    <ClipLoader loading={content.loading} color={'#91d573'} css={override} size={250}/>
                    <Books content={content}
                           quest={quest}
                           search={search}
                           bookFetch={props.bookFetch}/>
                </div>
            </div>

        );
    }
}
export default Content;