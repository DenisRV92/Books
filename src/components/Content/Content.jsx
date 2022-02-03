import React, {useContext, useEffect, useState} from 'react';
import style from './Content.module.scss'
import Books from "./Books/Books";
import {ContextApp} from "../Search/Search";
// import {ContextApp} from "../Nav/Nav";


const Content = (props) => {
    const [content, dispatch, quest,setQuest,search] = useContext(ContextApp);
// useEffect(()=>console.log(content),[content.length])
//     const pagination = Array.from(Array(198).keys())
//     const pagination=[1,2,3,4,5,6,7,8,9,10];
//     console.log(props.bookSearch)
    if (!content) {
        return null
    } else {
        // useEffect(()=>console.log(content),[content.length])
// console.log(stateContext)
//     const state = useContext(stateContext)
//     console.log(content.books[0])
//
// debugger
        return (
            // <stateContext.Provider>

            <div className={style.content}>
                <div className={style.container}>
                    {/*// <stateContext.Provider>*/}
                    <div className={style.paginations}>
                        {/*{pagination.map((page, index) => <span key={index} className={style.pagination}>{page}</span>)}*/}
                    </div>
                    <Books content={content}
                           quest={quest}
                           search={search}
                           // currentPage={currentPage}
                           // setCurrentPage={setCurrentPage}
                           bookFetch={props.bookFetch}/>

                    {/*'ssssssssssssssssssss'*/}
                    {/*// </stateContext.Provider>*/}

                </div>

            </div>
            // </stateContext.Provider>
        );
        // debugger

        // }
        // else {
        //     debugger
        //     return null
    }
}
export default Content;