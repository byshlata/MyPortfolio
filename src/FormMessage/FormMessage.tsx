import React, {useState} from 'react';
import s from './FormMessage.module.sass'
import {SuperInputText} from "./Input/SuperInputText";
import {SuperTextarea} from "./SuperTextarea/SuperTextarea";
import {Button} from "../Button/Button";
import {DEFAULT_ENCODING} from "crypto";

export const FormMessage = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')


    const nameChange = (value: string) => {
            setName(value)
    }

    const emailChange = (value: string) => {
        setEmail(value)
    }

    const messageChange = (value: string) => {
        setMessage(value)
    }

    const sendMessage = () => {

    }

    return (
        <form className={s.formWrapper}>
            <SuperInputText
                onChangeText={nameChange}
                valueInput={name}
                valueLabel={'Name'}
            />
            <SuperInputText
                onChangeText={emailChange}
                valueInput={email}
                valueLabel={'Email'}
            />
            <SuperTextarea
                onChangeText={messageChange}
                valueInput={message}
                valueLabel={'Message'}
            />

            <Button title={'Send message'} callback={sendMessage}/>

        </form>
    );
};
