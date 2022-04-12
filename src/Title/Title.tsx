import React from 'react';
import s from "./Title.module.sass";


type directionLineType = 'leftLine' | 'rightLine'

type titleType = {
    title: string,
    directionLine: directionLineType
}

export const Title: React.FC<titleType> = props => {
    const {
        title, directionLine
    } = props


    return (
        <>
            <hr className={ directionLine === 'rightLine' ? s.lineRight : s.lineLeft}/>
            <h2 className={s.title}>{title}</h2>
        </>
    );
};
