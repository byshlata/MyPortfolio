import React, {useState} from 'react';
import s from './PhotoBlock.module.sass'
import {Button} from "../../Button/Button";
import {EducationInformation} from "../../EducationInformation/EducationInformation";
import {ComponentsSVGPhotoBlock} from "../../SvgComponents/ComponentsSVG"


const skills = ['React', 'Redux', 'HTML', 'JavaScript', 'TypeScript', 'Sass', 'Css', 'Unit test', 'StoryBook', 'Axios', 'Material UI'] as const;


export const PhotoBlock = () => {

    const [rotateCard, setRotateCard] = useState<boolean>(false)
    const [showForm, setShowForm] = useState<boolean>(false)

    const showInformation = () => {
        setRotateCard(!rotateCard)
    }

    const showFormSend = () => {
        setShowForm(!showForm)
    }

    const frontOpenClose = rotateCard ? `${s.front} ${s.frontClose}`: s.front
    const backOpenClose = rotateCard ? `${s.backOpen} ${s.back}` : s.back

    return (
        <div className={s.photoBlockWrapper}>
            <div className={backOpenClose}>
                <EducationInformation/>
                <span className={s.textSpan}>Skills:</span>
                <div className={s.skillsBlock}>
                    {skills.map(m => <div key={m} className={s.skillItem}>{ComponentsSVGPhotoBlock[m]}</div>)}
                </div>
                <div className={s.boxPositionTwoButton}>
                        <Button title={`\u21E6 Back`} callback={showInformation}></Button>
                        <Button title={`\u21E9 Download CV`} callback={showInformation}></Button>
                </div>
            </div>
            <div className={frontOpenClose}>
                <div className={s.imgBlock}>
                    <img className={s.imgPhoto}
                         src="https://www.nam-nyam.ru/local/templates/main_new_home_2020/assets/images/no-image-available-icon-6.png"
                         alt="MyPhoto"/>
                </div>
                <div className={s.boxPositionOneButton}>
                        <Button title={'About me'} callback={showInformation}/>
                </div>
            </div>
        </div>

    );
};
