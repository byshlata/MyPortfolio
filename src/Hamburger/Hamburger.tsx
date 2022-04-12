import React, {useState} from 'react';
import s from './Hamburger.module.sass'

type HamburgerType = {
    stateHamburger: boolean,
    setStateHamburger: (value: boolean) => void
}



export const Hamburger: React.FC<HamburgerType> = props => {

    const {
        stateHamburger, setStateHamburger
    } = props

    const openMenuHamburger = () => {
        setStateHamburger(!stateHamburger)
    }

    const openCloseHamburgerClassName = stateHamburger ? `${s.hamburgerIcon} ${s.open}` : s.hamburgerIcon;
    return (
        <div className={s.containerHamburger}>
            <div
                className={s.menu}
                onClick={openMenuHamburger}
            >
                <div className={openCloseHamburgerClassName}>
                </div>
            </div>
        </div>
    );
};
