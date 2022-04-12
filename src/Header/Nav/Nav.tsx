import React from 'react';
import s from './Nav.module.sass'
import containerStyle from '../../sass/container.module.sass'

export const Nav = () => {
    return (
        <div  className={s.navWrapper}>
            <div className={containerStyle.container}>
                <div className={s.nav}>
                    <a className={s.navLink} href="">Main</a>
                    <a className={s.navLink} href="">Skills</a>
                    <a className={s.navLink} href="">Project</a>
                    <a className={s.navLink} href="">Contacts</a>
                </div>
            </div>

        </div>


    );
};
