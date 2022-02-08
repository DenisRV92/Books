import React, {useState} from 'react';
import style from "./BooksItems.module.scss";
import Modal from "../../../Modal/Modal";
import logo from '../../../../img/bookImg.png';

const BooksItems = (props) => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.page__img}>
                    {props.img
                        ? <img src={props.img.thumbnail} alt=""/>
                        : <img src={logo} alt=""/>
                    }
                </div>
                <div className={style.page__title}>{props.title}</div>
                <button onClick={() => setModalActive(true)}>more info</button>
            </div>
            <Modal active={modalActive}
                   setActive={setModalActive}
                   title={props.title}
                   img={props.img}
                   authors={props.authors}
                   description={props.description}
                   previewLink={props.previewLink}
                   infoLink={props.infoLink}/>
        </div>
    )
}

export default BooksItems;