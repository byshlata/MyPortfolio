import React from 'react';
import s from './Button.module.sass'

type ButtonType = {
    title: string;
    callback: () => void,
    hrefButton?: string
}


export const Button: React.FC<ButtonType> = props => {
    const {
        title, callback, hrefButton
    } = props

    const onClickHandler = () => {
        callback()
    }

    return (
        <div className={s.buttonWrapper}>
            <a href={hrefButton ? hrefButton : '#!'} className={s.button} onClick={onClickHandler}>{title}</a>
        </div>

    );
};
