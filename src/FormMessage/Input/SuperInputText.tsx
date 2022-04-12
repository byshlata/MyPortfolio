import React, {ChangeEvent} from 'react';
import s from './SuperInputText.module.sass'


type SuperInputTextType = {
    onChangeText: (value: string) => void,
    valueInput: string,
    valueLabel: string
    error?: string
}


export const SuperInputText: React.FC<SuperInputTextType> = props => {

    const {
        onChangeText, valueInput, valueLabel, error
    } = props

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeText(e.currentTarget.value)
    }


    const placeholderValue = `Your ${valueLabel.toLowerCase()}...`


    return (
        <div className={s.inputWrapper}>
            <label className={s.labelItem}>{valueLabel}</label>
            <input className={s.inputItem}
                   onChange={onChangeCallback}
                   value={valueInput}
                   placeholder={placeholderValue}
            />
        </div>

    );
};
