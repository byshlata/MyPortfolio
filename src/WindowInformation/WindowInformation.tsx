import React from 'react';
import s from './WindowInformation.module.sass'


type WindowInformationType = {
    onOff: boolean,
    textInformation: string
}



const WindowInformation: React.FC<WindowInformationType> = props => {
    const {
        onOff, textInformation
    } = props


    const openWindowInformation = onOff ? s.windowInformationOpen : s.windowInformation;

    return (
        <div className={openWindowInformation}>
            <h4 className={s.titleTextWindowInformation}>About project:</h4>
            <p className={s.textWindowInformation}>{textInformation}</p>
        </div>
    );
};

export default WindowInformation;