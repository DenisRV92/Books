import React from 'react';

const BooksItems=(props)=>{
    return(
        <div>
            {props.title}
        </div>
    )
}
const Books = (props) => {

// console.log(props.content)
//     props.content.map(v=>console.log('sv'))
    const booksItem=props.content.map(v=><BooksItems title={v.title}/>)
    return (
        <div>
            {booksItem}
        </div>
    );
};

export default Books;