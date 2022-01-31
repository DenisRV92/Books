import React, {useContext, useEffect, useState} from 'react';
import style from './Content.module.scss'
import Books from "./Books/Books";
import {ContextApp} from "../Search/Search";
// import {ContextApp} from "../Nav/Nav";


const Content = () => {
    const [content,dispatch,quest] = useContext(ContextApp);
// useEffect(()=>console.log(content),[content.length])

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
                    <Books content={content} quest={quest}/>

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