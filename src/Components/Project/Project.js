import React from 'react';
import Me from '../../images/cardigan.jpg';
import './Project.css'

export default function Project(props) {
    return (
        <div className = 'project-div'>
            <h3>{props.title}</h3>
            <div className = 'img-div'>
                <img className = 'pimg' src={props.img} />
                <div className = 'techs-div'>Technology used: {props.tech}</div>
            </div>
            <div className = 'text-div'>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
