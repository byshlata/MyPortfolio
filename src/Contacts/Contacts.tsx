import React from 'react';
import s from './Contacts.module.sass'
import containerStyle from '../sass/container.module.sass'
import {Title} from "../Title/Title";
import {FormMessage} from "../FormMessage/FormMessage";


export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={containerStyle.container}>
                <Title title={'Contacts'} directionLine={'rightLine'}/>
                <FormMessage/>
            </div>
        </div>
    );
};

