import React, {useContext} from 'react';
import BooksItems from "./BooksItems/BooksItems";
import style from "./Books.module.scss";
import {createPages} from "../../utils/pagesCreator";
import {ContextApp} from "../../Reducer/Reducer";
// import ClipLoader from "react-spinners/ClipLoader";
// import {ContextApp} from "../../Search/Search";


const Books = (props) => {
    const [content, dispatch, quest, setQuest, search, currentPage, setCurrentPage, error, setError] = useContext(ContextApp)

    if (error) {
        return (
            <div className={style.books}>
                'Книга не найдена'
            </div>
        )
    }

    if (!quest) {
        var booksItem = content.books.map(v => v.category === window.location.pathname.replace('/', '')
            ? <BooksItems key={v.id}
                          loading={content.loading}
                          title={v.title}
                          img={v.img}
                          authors={v.authors}
                          description={v.description}
                          previewLink={v.previewLink}
                          infoLink={v.infoLink}/>
            : null)
    } else {
        var booksItem = content.books.map(v => v.category === 'booksSearch'
            ? <BooksItems key={v.id}
                          loading={content.loading}
                          title={v.title}
                          img={v.img}
                          authors={v.authors}
                          description={v.description}
                          previewLink={v.previewLink}
                          infoLink={v.infoLink}/>
            : null)
    }

    const pagination = [];
    const maxResult = 20;
    let pagesCount = Math.ceil(content.totalItems / maxResult);
    if (pagesCount >= 50) {
        pagesCount = 50;
    }
    const prev = () => {
        setCurrentPage((prev) => prev === 1 ? prev : prev - 1);
    }
    const next = () => {
        setCurrentPage((prev) => prev === pagesCount ? prev : prev + 1);
    }

    const numberPage = (event) => {
        let page = +event.currentTarget.innerText
        if(page!==currentPage) {
            setCurrentPage(prev => prev < page ? page : prev - (prev - page));
            if (!quest) {
                props.bookFetch(event, page, urlName)
            } else {
                search(event, page)
            }
        }
    }

    createPages(pagination, pagesCount, currentPage);
    const urlName = window.location.pathname.replace('/', '');
    return (
        <div className={style.books}>
            {/*<ClipLoader loading={content.loading}  size={150} />*/}
            {content.books.length === 0 || <div className={style.pagination_container}>
                <button disabled={currentPage === 1} className={currentPage === 1 ? style.disabled : null}
                        onClick={(e) => {
                            prev();
                            if (!quest) {
                                props.bookFetch(e, currentPage - 1, urlName);
                            } else {
                                search(e, currentPage - 1);
                            }
                        }}>prev
                </button>
                {pagination.map((page, index) => <button key={index}
                                                         onClick={(event) => {
                                                             numberPage(event);
                                                         }}
                                                         className={currentPage === page ? style.active : ''}>{page}</button>)}
                <button disabled={currentPage === pagesCount}
                        className={currentPage === pagesCount ? style.disabled : null} onClick={(e) => {
                    next();
                    if (!quest) {
                        props.bookFetch(e, currentPage + 1, urlName);
                    } else {
                        search(e, currentPage + 1);
                    }
                }}>next
                </button>
            </div>}
            <div className={style.container}>
                {booksItem}
            </div>
        </div>
    );
};

export default Books;