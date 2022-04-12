import React from 'react';
import s from './EducationInformation.module.sass'

const informationAboutMe = {
    name: 'Aliaksandr',
    address: 'Minsk, Belarus',
    phone: '+375292642799',
    email: 'byshlata@yandex.ru',
    education: ['BNTU, Carbuilding, 2006-2011', 'IT-INCUBATOR, Front-end, 2022'],
    experience: 'MAZ, 2011-2022, Lead design engineer ',
}


export const EducationInformation = () => {
    return (
        <>

        <div className={s.infoWrapper}>
            <ul>
                <li>
                    <span className={s.title}>name: </span>
                    <span>{informationAboutMe.name}</span>
                </li>
                <li>
                    <span>address: </span>
                    <span>{informationAboutMe.address}</span>
                </li>
                <li>
                    <span>phone: </span>
                    <span>{informationAboutMe.phone}</span>
                </li>
                <li>
                    <span>email: </span>
                    <span>{informationAboutMe.email}</span>
                </li>
                <li>
                    <span>education: </span>
                    <br/>
                    <span>{informationAboutMe.education[0]}</span>
                    <br/>
                    <span>{informationAboutMe.education[1]}</span>
                </li>
                <li>
                    <span>experience: </span>
                    <span>{informationAboutMe.experience}</span>
                </li>
            </ul>
        </div>

        </>
    );
};
