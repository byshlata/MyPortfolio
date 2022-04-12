import React from 'react';
import s from './Footer.module.sass'
import containerStyle from '../sass/container.module.sass'
import {Title} from "../Title/Title";
import {IconInstagram} from "./IconSVG/IconInstagram";
import {IconFacebook} from "./IconSVG/IconFacebook";
import {IconLinkedin} from "./IconSVG/IconLinkedin";
import {IconGithub} from "./IconSVG/IconGithub";


export const Footer = () => {
    return (
        <div className={s.contacts}>
            <div className={containerStyle.container}>
                <Title title={'Aliaksand Rudnitsky'} directionLine={'leftLine'}/>
                <div className={s.socialWrapper}>
                    <IconInstagram/>
                    <IconFacebook/>
                    <IconLinkedin/>
                    <IconGithub/>
                </div>
            </div>
        </div>
    );
};
