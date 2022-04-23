import React from 'react';
import {Skill} from "../Skills/Skill/Skill";
import Slider from './Slider';

type SliderContainerType = {
    arrayObj: {}
}


export const SliderContainerSkills: React.FC<SliderContainerType> = props => {

    const {arrayObj} = props


      // @ts-ignore
    const arrayElements = arrayObj.skills.map(m => <Skill key={m} title={m.toUpperCase()} svg={arrayObj[m]}/>)

    return (
            <Slider
                arrayElements={arrayElements}
            />
    );
};

