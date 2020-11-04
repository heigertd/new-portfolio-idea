import React, {useState, useEffect} from 'react';
import './Main.css';

export default function Main() {
    const [bigState, setBigState] = useState([]);

    useEffect(() => {
        setBigState('');
    }, [])

    function big(e){
        let box = e.target.value
        setBigState(box);
    }

    function small(){
        setBigState('');
    }

    return (
        <div>
            <div>
                <h1>Devin Heigert</h1>
            </div>
            <div className = 'main-content'>
                <div className = {bigState === 'box1'? 'box1 expanded' : 'box1 shrink'}>
                <div className={bigState === 'box1'? 'hidden' : ''}>
                        <button value = 'box1' onClick = {big}>Expand</button>
                    </div>
                    <div className={bigState === 'box1'? '' : 'hidden'}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button onClick = {small}>Smaller</button>
                    </div>
                </div>
                <div className = {bigState === 'box2'? 'box2 expanded' : 'box2 shrink'}>
                    <div className={bigState === 'box2'? 'hidden' : ''}>
                        <button value = 'box2' onClick = {big}>Expand</button>
                    </div>
                    <div className={bigState === 'box2'? '' : 'hidden'}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button onClick = {small}>Smaller</button>
                    </div>
                </div>
                <div className = {bigState === 'box3'? 'box3 expanded' : 'box3 shrink'}>
                <div className={bigState === 'box3'? 'hidden' : ''}>
                        <button value = 'box3' onClick = {big}>Expand</button>
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
