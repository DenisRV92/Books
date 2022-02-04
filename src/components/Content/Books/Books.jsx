import React, {useContext, useMemo, useRef, useState} from 'react';
import BooksItems from "./BooksItems/BooksItems";
import style from "./Books.module.scss";
import {createPages} from "../../utils/pagesCreator";
import {ContextApp} from "../../Search/Search";
//
// const BooksItems=(props)=>{
//     return(
//         <div с>
//             {props.title}
//         </div>
//     )
// }
const Books = (props) => {
    const [content, dispatch, quest, setQuest, search] = useContext(ContextApp)
    // useEffect(()=>console.log(content),[content.currentPage])
// console.log(props.content[1].books)
    // console.log(window.location.pathname.replace('/', ''))
//     props.content.map(v=>console.log('sv'))
//     const booksItem='';
//     console.log(content)
    // if(props.content[0].books.length===0) {
    if (!quest) {
        var booksItem = content.books.map(v => v.category === window.location.pathname.replace('/', '')
            ? <BooksItems key={v.id}
                          title={v.title}
                          img={v.img}
                          authors={v.authors}
                          description={v.description}/>
            : null)
    } else {
        var booksItem = content.books.map(v => v.category === 'booksSearch'
            ? <BooksItems key={v.id}
                          title={v.title}
                          img={v.img}
                          authors={v.authors}
                          description={v.description}/>
            : null)
    }
    // }
    // else{
    //     var booksItem = props.content[0].books.map(v => <BooksItems key={v.id}
    //                       title={v.title}
    //                       img={v.img}
    //                       authors={v.authors}
    //                       description={v.description}/>)
    // }
    // const pagination = Array.from(Array(12).keys())
    // let pages=10;
    const pagination = [];
    // for (let i = 1; i <= 10; i++) {
    //     pagination.push(i);
    // }
    // const maxResult=20;
    // const pagesCount=Math.ceil(props.content.totalItems/maxResult);
    // createPages(pagination,pagesCount,currentButton);

    const [currentPage, setCurrentPage] = useState(1);
    // const inputEl = useRef(currentPage);
    // console.log(inputEl)
    const maxResult = 20;
    let pagesCount = Math.ceil(content.totalItems / maxResult);
    if (pagesCount >= 50) {
        pagesCount = 50;
    }
    // createPages(pagination,pagesCount,currentButton);
    const prev = () => {
        setCurrentPage((prev) => prev === 1 ? prev : prev - 1);
        // console.log(currentPage)
    }
    const next = () => {
        setCurrentPage((prev) => prev === pagesCount ? prev : prev + 1);
        // inputEl.current=currentPage
        // dispatch({
        //     type:'CURRENT_PAGE',
        //     page:currentPage,
        // })
        // console.log(currentPage)
    }
    // inputEl.current=currentPage
    // console.log(inputEl);
    const numberPage = (event) => {
        // console.log(event.currentTarget.innerText)
        let page = +event.currentTarget.innerText
        // inputEl.current=page;
        setCurrentPage(prev => prev < page ? page : prev - (prev - page));
        search(event, page)
        // console.log(inputEl.curren)
    }
    // const maxResult=20;
    // const pagesCount=Math.ceil(props.content.totalItems/maxResult);
    // console.log(currentPage)
    createPages(pagination, pagesCount, currentPage);

    return (
        <div className={style.books}>
            {content.books.length === 0 || <div className={style.pagination_container}>
                <button disabled={currentPage === 1} className={currentPage === 1 ? style.disabled : null}
                        onClick={(e) => {
                            prev();
                            search(e, currentPage - 1)
                            // dispatch({
                            //     type:'CURRENT_PAGE',
                            //     page:currentPage,
                            // })
                        }}>prev
                </button>
                {pagination.map((page, index) => <button key={index}
                                                         onClick={(event) => {
                                                             numberPage(event);
                                                             // search(event, currentPage);
                                                         }}
                                                         className={currentPage === page ? style.active : ''}>{page}</button>)}
                <button disabled={currentPage === pagesCount}
                        className={currentPage === pagesCount ? style.disabled : null} onClick={(e) => {
                    next();
                    search(e, currentPage + 1)
                    // dispatch({
                    //     type:'CURRENT_PAGE',
                    //     page:currentPage,
                    // })
                }}>next
                </button>
            </div>}
            {booksItem}
        </div>
    );
};

export default Books;