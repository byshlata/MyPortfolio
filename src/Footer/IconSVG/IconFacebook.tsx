import React from 'react';
import s from './IconFacebook.module.sass'

export const IconFacebook = () => {
    return (
        <div className={s.linkWrapper}>
        <a className={s.link} href="#">
            <svg className="svg-facebook svg--color-main svg--size-small" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.25 6.875V4.375C11.25 3.685 11.81 3.125 12.5 3.125H13.75V0H11.25C9.17875 0 7.5 1.67875 7.5 3.75V6.875H5V10H7.5V20H11.25V10H13.75L15 6.875H11.25Z"/>
            </svg>
        </a>
        </div>
    );
};
