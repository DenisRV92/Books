import React, {useEffect} from 'react';
import style from './Modal.module.scss'
import logo from "../../img/bookImg.png";
import close from '../../img/close.jpg'

const Modal = ({active, setActive, title, img, authors, description, previewLink, infoLink}) => {
    if (active) {
        return (
            <div className={style.modal} onClick={() => setActive(false)}>
                <div className={style.modal__content} onClick={e => e.stopPropagation()}>
                    <img className={style.close} src={close} onClick={() => setActive(false)} alt=""/>
                    <div className={style.content__title}>
                        <div className={style.title__img}>
                            {img
                                ? <img src={img.thumbnail} alt=""/>
                                : <img src={logo} alt=""/>
                            }
                        </div>
                        <div className={style.title__description}>
                            <p><b>Title</b> <b>:</b> {title}</p>
                            <p><b>Authors</b> <b>:</b> {authors}</p>
                        </div>
                    </div>
                    <div className={style.content__description}>
                        {description}
                    </div>
                    <div className={style.content__button}>
                        <span><a href={previewLink}>Preview Link</a></span>
                        <span><a href={infoLink}>Info Link</a></span>
                    </div>
                </div>
            </div>
        )
    } else return null
}

export default Modal