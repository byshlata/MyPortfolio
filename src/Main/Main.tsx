import React from 'react';
import s from './Main.module.sass'
import containerStyle from '../sass/container.module.sass'


import {TitleBlock} from "./TitleBlock/TitleBlock";
import {PhotoBlock} from "./PhotoBlock/PhotoBlock";

export const Main = () => {

    return (
        <div className={s.main}>
            <div className={containerStyle.container}>
                <div className={s.wrapper}>
                    <TitleBlock/>
                    <PhotoBlock/>
                </div>
            </div>
        </div>
    );
};
