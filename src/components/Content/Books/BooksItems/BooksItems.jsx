import React, {useState} from 'react';
import style from "./BooksItems.module.scss";
import Modal from "../../../Modal/Modal";


const BooksItems = (props) => {
    const [modalActive, setModalActive] = useState(false);
    // console.log(props.img)
    return (
        // <div className={style.books}>
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.page__img}>
                    {props.img
                        ? <img src={props.img.thumbnail} alt=""/>
                        : <div>'ssss'</div>
                    }
                </div>
                <div className={style.page__title}>{props.title}</div>
                <button onClick={() => setModalActive(true)}>more info</button>
                {/*<Modal/>*/}
            </div>
            <Modal active={modalActive}
                   setActive={setModalActive}
                   title={props.title}
                   img={props.img.thumbnail}
                   authors={props.authors}
                   description={props.description}
                   previewLink={props.previewLink}
                   infoLink={props.infoLink}/>
        </div>
    )
}

export default BooksItems;