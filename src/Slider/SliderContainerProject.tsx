import React from 'react';
import {Project} from "../Projects/Project/Project";
import Slider from "./Slider";

type SliderContainerProjectType = {
    arrayProject: any[]
}


export const SliderContainerProject: React.FC<SliderContainerProjectType> = props => {
    const {arrayProject} = props

    const arrayElements = arrayProject.map(m => <Project key={m.title} title={m.title} description={m.description} technology={m.technology} imgProject={m.imgProject}/>)


    return (
        <div>
            <Slider arrayElements={arrayElements}/>
        </div>
    );
};
