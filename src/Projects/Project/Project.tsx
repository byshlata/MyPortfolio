import React, {SyntheticEvent, useState} from 'react';
import s from './Project.module.sass'
import imgDefault from '../../../src/counter.jpg'
//import imgDefault from '../../img/noPhoto.png'
import {ComponentsSVGProject} from '../../SvgComponents/ComponentsSVG'
import {Button} from "../../Button/Button";
import {Trapezoid} from "../../SvgComponents/Trapezoid";
import {Hamburger} from "../../Hamburger/Hamburger";
import WindowInformation from "../../WindowInformation/WindowInformation";

export type ProjectType = {
    title: string;
    description: string;
    imgProject: string;
    technology: technologyType[];
}


export type technologyType = 'React'
    | 'Redux'
    | 'HTML'
    | 'JavaScript'
    | 'TypeScript'
    | 'Sass'
    | 'Css'
    | 'Unit test'
    | 'StoryBook'
    | 'Axios'
    | 'Material UI'


export const Project: React.FC<ProjectType> = props => {
    const {
        title, description, technology, imgProject
    } = props

    const [aboutProject, setAboutProject] = useState<boolean>(false)

    const defaultSrc = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = imgDefault
    }



    const showInformation = () => {

    }


    return (
        <div className={s.projectWrapper}>
            <h3 className={s.title}>{title}</h3>
            <div className={s.trapezoid}>
                <Trapezoid/>
            </div>
            <img
                className={s.img}
                src={imgProject}
                onError={defaultSrc}
                alt="Poster"
            />

            <div className={s.boxButton}>
                <Button title={'Git-Page'} callback={showInformation}/>
            </div>
            <div className={s.technologyWrapper}>
                {technology.map(m => ComponentsSVGProject[m])}
            </div>
            <Hamburger
                setStateHamburger={setAboutProject}
                stateHamburger={aboutProject}
            />
            <WindowInformation
            onOff={aboutProject}
            textInformation={description}
            />
        </div>
    );
};
