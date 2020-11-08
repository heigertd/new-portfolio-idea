import React, {useState, useEffect} from 'react';
import Me from '../images/cardigan.jpg';
import Mody from '../images/Mody.png';
import Sav from '../images/Screenshot (51).png';
import Mule from '../images/Screenshot (24).png';
import Social from '../images/social-distance.png';
import data from '../data.js';
import Experience from '../Components/Experience/Experience';
import Project from '../Components/Project/Project'
import './Main.css';

//TODO: Add svelte to experience

export default function Main() {
    const [bigState, setBigState] = useState([]);

    useEffect(() => {
        setBigState('box1');
    }, [])

    function big(e){
        let box = e.target.value
        setBigState(box);
    }

    function small(){
        setBigState('');
    }

    return (
        <div className = 'all-div'>
            <div className = 'name-div'>
                <h1>Devin Heigert</h1>
            </div>
            <div className = 'main-content'>
                <div className = {bigState === 'box1'? 'box1 expanded' : 'box1 shrink'}>
                    <div className={bigState === 'box1'? 'hidden' : 'unhidden'}>
                        <div className = 'color-block'></div>
                        <button value = 'box1' onClick = {big}>About Avenue</button>
                    </div>
                    <div className={bigState === 'box1'? '' : 'hidden'}>
                        <div className = 'button-div'>
                            <button onClick = {small}>X</button>
                        </div>
                        <div className = 'content-div'>
                            <div className = 'text-div'>
                                <p>{data[0].con1}</p>
                                <div>
                                    <h3>Experience</h3>
                                    <div className = 'xp-div'>
                                        {data[0].xp.map(element => { 
                                            return <Experience image = {element.image} title = {element.title} />
                                        })} 
                                    </div>
                                </div>
                            </div>
                            <div className = 'img-div'>
                                <img className = 'me' src={Me} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {bigState === 'box2'? 'box2 expanded' : 'box2 shrink'}>
                    <div className={bigState === 'box2'? 'hidden' : 'unhidden'}>
                        <div className = 'color-block'></div>
                        <button value = 'box2' onClick = {big}>Portfolio Place</button>
                    </div>
                    <div className={bigState === 'box2'? 'portfolio' : 'hidden'}>
                        <div className = 'button-div'>
                            <button onClick = {small}>X</button>
                        </div>
                        <div className = 'content-div'>
                            <Project img = {Sav} tech = {data[1].projects[0].techs} description = {data[1].projects[0].description} title = {data[1].projects[0].title} />
                            <Project img = {Mule} tech = {data[1].projects[1].techs} description = {data[1].projects[1].description} title = {data[1].projects[1].title} />
                            <Project img = {Mody} tech = {data[1].projects[2].techs} description = {data[1].projects[2].description} title = {data[1].projects[2].title} />
                            <Project img = {Social} tech = {data[1].projects[3].techs} description = {data[1].projects[3].description} title = {data[1].projects[3].title} />
                        </div>
                    </div>
                </div>
                <div className = {bigState === 'box3'? 'box3 expanded' : 'box3 shrink'}>
                    <div className={bigState === 'box3'? 'hidden' : 'unhidden'}>
                        <div className = 'color-block'></div>
                        <button value = 'box3' onClick = {big}>Contact Center</button>
                    </div>
                    <div className={bigState === 'box3'? '' : 'hidden'}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button onClick = {small}>Smaller</button>
                    </div>
                </div>
            </div>
        </div>
    )
}