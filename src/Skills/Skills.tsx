import React from "react";
import s from './Skills.module.sass'
import containerStyle from '../sass/container.module.sass'
import {Title} from "../Title/Title";
import {ComponentsSVG} from '../SvgComponents/ComponentsSVG'
import {SliderContainerSkills} from "../Slider/SliderContainerSkills";

export const Skills = () => {

    return (
        <div className={s.skillsBlock}>
            <div className={containerStyle.container}>
                <Title title={'Skills'} directionLine={'rightLine'}/>
                <div className={s.skillsWrapper}>
                    <SliderContainerSkills arrayObj={ComponentsSVG}/>
                </div>
            </div>
        </div>
    );
};

