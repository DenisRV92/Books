import React, {useContext, useState} from 'react';
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
// console.log(props.content[1].books)
    // console.log(window.location.pathname.replace('/', ''))
//     props.content.map(v=>console.log('sv'))
//     const booksItem='';
//     console.log(props)
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
    const maxResult = 20;
    const pagesCount = Math.ceil(content.totalItems / maxResult);
    // createPages(pagination,pagesCount,currentButton);
    const prev = () => {
        setCurrentPage((prev) => prev === 1 ? prev : prev - 1);
    }
    const next = () => {
        setCurrentPage((prev) => prev === pagesCount ? prev : prev + 1);
    }
    const numberPage = (event) => {
        console.log(event.currentTarget.innerText)
        setCurrentPage(prev => prev < +event.currentTarget.innerText ? +event.currentTarget.innerText : prev - 1);
    }
    // const maxResult=20;
    // const pagesCount=Math.ceil(props.content.totalItems/maxResult);
    createPages(pagination, pagesCount, currentPage);
    return (
        <div className={style.books}>
            {content.books.length === 0 || <div className={style.pagination_container}>
                <button disabled={currentPage === 1} className={currentPage === 1 ? style.disabled : null}
                        onClick={(e) => {
                            prev();
                            search(e, currentPage - 1);
                        }}>prev
                </button>
                {pagination.map((page, index) => <button key={index}
                                                         onClick={(event) => {
                                                             numberPage(event);
                                                             search(event, currentPage);
                                                         }}
                                                         className={currentPage === page ? style.active : ''}>{page}</button>)}
                <button onClick={(e) => {
                    next();
                    search(e, currentPage + 1);
                }}>next
                </button>
            </div>}
            {booksItem}
        </div>
    );
};

export default Books;