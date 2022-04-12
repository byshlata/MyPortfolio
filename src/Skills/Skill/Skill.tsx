import React, {ReactElement} from "react";
import s from './Skill.module.sass'


type SkillType = {
    title: string,
    svg: ReactElement,
}


export const Skill: React.FC<SkillType> = props => {

    const {
        title, svg
    } = props

    return (
        <div className={s.skillWrapper}>
                <div className={s.skillSvg}>
                    {svg}
                </div>
                <h3 className={s.skillTitle}>{title}</h3>
        </div>
    );
};
