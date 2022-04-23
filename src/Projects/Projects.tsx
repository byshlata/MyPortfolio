import React from 'react';
import s from './Projects.module.sass'
import containerStyle from '../sass/container.module.sass'
import {Title} from "../Title/Title";
import {Project, ProjectType} from "./Project/Project";
import {SliderContainerProject} from "../Slider/SliderContainerProject";


const projects: ProjectType[] = [
    {title: 'TodoList', imgProject: 'img/todolist.jpg', description: 'LoremLoremL oremL  oremLoremLoremLorem', technology: ['React', 'Redux', 'Axios', 'Material UI', 'TypeScript'] },
    {title: 'Counter', imgProject: 'img/counter.jpg', description: 'The counter application changes the values from the minimum to the maximum. Minimum and maximum values can be set.' +
            'Working with data is implemented through Redux. The selected settings and color theme are saved in the Local Storage.', technology: ['React', 'Redux', 'Material UI', 'TypeScript']},
    {title: 'SearchFilms', imgProject: 'img/searchFilms.jpg', description: 'LoremLorem LoremLo remLo remLoremLorem', technology: ['React', 'Redux', 'Axios', 'Material UI', 'TypeScript']},
    {title: 'Home', imgProject: 'img/home.jpg', description: 'LoremLoremLor emLor emLoremLo remLor em', technology: ['React', 'Redux', 'Axios', 'Sass', 'TypeScript']},
    {title: 'Social network', imgProject: 'img/todolist.jpg', description: 'LoremLo remLor emLoremLo remLoremLorem', technology: ['React', 'Redux', 'Axios', 'Sass', 'TypeScript']}
]






export const Projects = () => {
    return (
        <div className={s.projects}>
            <div className={containerStyle.container}>
                <Title title={'Project'} directionLine={'leftLine'}/>
                <div className={s.projectsWrapper}>
                    <SliderContainerProject arrayProject={projects}/>
                </div>
            </div>
        </div>
    );
};
