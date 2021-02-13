import React, {useState, useEffect} from 'react';
import Portfolio from '../pages/Portfolio/Portfolio'
import Contact from '../pages/Contact/Contact'
import About from '../pages/About/About'

import './Main.css';

export default function Main() {
    return (
        <div>
            <div className = 'all-div'>
                <div className = 'name-div'>
                    <h1>Devin Heigert</h1>
                </div>
                <div className = 'section-title'>
                    <h3>Seattle-based Web Developer</h3>
                </div>
            </div>
                <About />
                <Portfolio />
                <Contact />
        </div>
    )
}