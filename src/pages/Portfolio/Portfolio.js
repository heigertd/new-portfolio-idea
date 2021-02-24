import React from 'react'
import './portfolio.css';
import FakeCoffee from '../../images/Screenshot (63).png';
import Sav from '../../images/Screenshot (51).png';
import Misbach from '../../images/Screenshot (62).png';
import Wiki from '../../images/Screenshot (66).png';
import data from '../../data.js';
import Project from '../../Components/Project/Projects';

export default function Portfolio() {
    return (
    <div className = 'portfolio-section'>
        <div className = 'about-title-div'>
                <h1>Portfolio</h1>
            </div>
        <div className = 'portfolio-content-div'>
            <Project img = {Sav} tech = {data[1].projects[0].techs} description = {data[1].projects[0].description} title = {data[1].projects[0].title} depolyedSite = {data[1].projects[0].depolyedSite} />
            <Project img = {Misbach} tech = {data[1].projects[1].techs} description = {data[1].projects[1].description} title = {data[1].projects[1].title} depolyedSite = {data[1].projects[1].depolyedSite} />
            <Project img = {FakeCoffee} tech = {data[1].projects[2].techs} description = {data[1].projects[2].description} title = {data[1].projects[2].title} depolyedSite = {data[1].projects[2].depolyedSite} />
            <Project img = {Wiki} tech = {data[1].projects[3].techs} description = {data[1].projects[3].description} title = {data[1].projects[3].title} depolyedSite = {data[1].projects[3].depolyedSite} />
        </div>
    </div>
    )
}
