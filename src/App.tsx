import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {SliderContainerSkills} from "./Slider/SliderContainerSkills";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default App;
