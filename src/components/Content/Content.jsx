import React, {useContext} from 'react';
import style from './Content.module.scss'
import Books from "./Books/Books";
import {ContextApp} from "../Reducer/Reducer";
// import {ContextApp} from "../Search/Search";from


const Content = (props) => {
    const [content, dispatch, quest, setQuest, search] = useContext(ContextApp);
    if (!content) {
        return null
    } else {
        return (
            <div className={style.content}>
                <div className={style.container}>
                    <div className={style.paginations}>
                    </div>
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