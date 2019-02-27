import React from 'react';
import './App.css';

const startscreen = (props) => {
    return <div>
        <h1 className="gamename"> CLASSIC SNAKE GAME </h1>
        <h3 onClick={props.startGame} style={{cursor:'pointer'}} className="startbutton"> <br/>START GAME </h3>
    </div>
}

export default startscreen;