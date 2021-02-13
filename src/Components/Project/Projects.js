import React from 'react';
import './Project.css'

export default function Project(props) {
    return (
        <div className = 'project-div'>
            <h3>{props.title}</h3>
            <div className = 'img-div'>
                <img className = 'pimg' src={props.img} />
            </div>
            <div className = 'text-div'>
                <div className = 'techs-div'>Technology used: {props.tech}</div>
                <p>{props.description}</p>
            </div>
            <div>
                <a href = {props.depolyedSite} target="_blank">Deployed Site</a>
            </div>
        </div>
    )
}
