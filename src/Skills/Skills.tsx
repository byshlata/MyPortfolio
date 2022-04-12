import React from "react";
import s from './Skills.module.sass'
import containerStyle from '../sass/container.module.sass'
import {Skill} from "./Skill/Skill";
import {Title} from "../Title/Title";
import {ComponentsSVG} from '../SvgComponents/ComponentsSVG'

export const Skills = () => {

    return (
        <div className={s.skillsBlock}>
            <div className={containerStyle.container}>
                <Title title={'Skills'} directionLine={'rightLine'}/>
                <div className={s.skillsWrapper}>
                    {
                        ComponentsSVG.skills.map(m => <Skill key={m} title={m.toUpperCase()} svg={ComponentsSVG[m]}/>)
                    }
                </div>
            </div>
        </div>
    );
};

