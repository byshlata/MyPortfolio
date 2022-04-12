import {LogoSVGReact} from "./LogoSVGReact";
import {LogoSVGRedux} from "./LogoSVGRedux";
import {LogoSVGHtml} from "./LogoSVGHtml";
import {LogoSVGJavaScript} from "./LogoSVGJavaScript";
import {LogoSVGTypeScript} from "./LogoSVGTypeScript";
import {LogoSVGSass} from "./LogoSVGSass";
import {LogoSVGCss} from "./LogoSVGCss";
import {LogoSVGJavaJest} from "./LogoSVGJest";
import {LogoSVGStoryBook} from "./LogoSVGStoryBook";
import React from "react";
import {LogoSVGAxios} from "./LogoSVGAxios";
import {LogoSVGMui} from "./LogoSVGMui";
import { v1 } from "uuid";

const svgWidthSkills = '50px'

export const ComponentsSVG = {
    skills: ['React', 'Redux', 'HTML', 'JavaScript', 'TypeScript', 'Sass', 'Css', 'Unit test', 'StoryBook', 'Axios', 'Material UI' ] as const,

    React: <LogoSVGReact key={v1()} width={svgWidthSkills} height={svgWidthSkills}/>,

    Redux: <LogoSVGRedux key={v1()} width={svgWidthSkills} height={svgWidthSkills}/>,

    HTML: <LogoSVGHtml key={v1()} width={svgWidthSkills} height={svgWidthSkills}/>,

    JavaScript: <LogoSVGJavaScript key={v1()} width={svgWidthSkills} height={svgWidthSkills}/>,

    TypeScript: <LogoSVGTypeScript key={v1()} width={svgWidthSkills} height={svgWidthSkills}/>,

    Sass: <LogoSVGSass key={v1()} width={svgWidthSkills} height={svgWidthSkills}/>,

    Css: <LogoSVGCss key={v1()} width={svgWidthSkills} height={svgWidthSkills}/>,

    'Unit test': <LogoSVGJavaJest key={v1()} width={svgWidthSkills} height={svgWidthSkills}/>,

    StoryBook: <LogoSVGStoryBook key={v1()} width={svgWidthSkills} height={svgWidthSkills}/>,

    Axios: <LogoSVGAxios key={v1()} width={svgWidthSkills} height={svgWidthSkills} fill={"#fff"}/>,

    'Material UI': <LogoSVGMui key={v1()} width={svgWidthSkills} height={svgWidthSkills}/>

}

const svgWidthProject = '30px'

export const ComponentsSVGProject = {

    React: <LogoSVGReact key={v1()} width={svgWidthProject} height={svgWidthProject}/>,

    Redux: <LogoSVGRedux key={v1()} width={svgWidthProject} height={svgWidthProject}/>,

    HTML: <LogoSVGHtml key={v1()} width={svgWidthProject} height={svgWidthProject}/>,

    JavaScript: <LogoSVGJavaScript key={v1()} width={svgWidthProject} height={svgWidthProject}/>,

    TypeScript: <LogoSVGTypeScript key={v1()} width={svgWidthProject} height={svgWidthProject}/>,

    Sass: <LogoSVGSass key={v1()} width={svgWidthProject} height={svgWidthProject}/>,

    Css: <LogoSVGCss key={v1()} width={svgWidthProject} height={svgWidthProject}/>,

    'Unit test': <LogoSVGJavaJest key={v1()} width={svgWidthProject} height={svgWidthProject}/>,

    StoryBook: <LogoSVGStoryBook key={v1()} width={svgWidthProject} height={svgWidthProject}/>,

    Axios: <LogoSVGAxios key={v1()} width={svgWidthProject} height={svgWidthProject} fill={'#000'}/>,

    'Material UI': <LogoSVGMui key={v1()} width={svgWidthProject} height={svgWidthProject}/>

}