import React from 'react';
import BooksItems from "./BooksItems/BooksItems";
import style from "./Books.module.scss";
//
// const BooksItems=(props)=>{
//     return(
//         <div с>
//             {props.title}
//         </div>
//     )
// }
const Books = (props) => {
// console.log(props.content[1].books)
    // console.log(window.location.pathname.replace('/', ''))
//     props.content.map(v=>console.log('sv'))
//     const booksItem='';
    console.log(props)
    // if(props.content[0].books.length===0) {
    if(!props.quest) {
        var booksItem = props.content.books.map(v => v.category === window.location.pathname.replace('/', '')
            ? <BooksItems key={v.id}
                          title={v.title}
                          img={v.img}
                          authors={v.authors}
                          description={v.description}/>
            : null)
    }
    else{
        var booksItem = props.content.books.map(v => v.category ==='booksSearch'
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
    return (
        <div className={style.books}>
            {booksItem}
        </div>
    );
};

export default Books;