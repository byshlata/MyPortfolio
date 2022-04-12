import React, {ChangeEvent} from 'react';
import s from "../Input/SuperInputText.module.sass";

type SuperTextareaType = {
    onChangeText: (value: string) => void,
    valueInput: string,
    valueLabel: string
}


export const SuperTextarea: React.FC<SuperTextareaType> = props => {

    const {
        onChangeText, valueInput, valueLabel
    } = props

    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeText(e.currentTarget.value)
    }



    return (
        <div className={s.inputWrapper}>
            <label className={s.labelItem}>{valueLabel}</label>
            <textarea className={s.inputItem}
                   onChange={onChangeCallback}
                   value={valueInput}
                   placeholder={'Write massage...'}
            />
        </div>
    );
};
