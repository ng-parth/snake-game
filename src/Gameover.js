import React from 'react';
import './App.css';

const gameover = (props) => {
    return <div>
        <h1 className="gamename">GAME OVER</h1>
        <h3 className="score">SCORE {props.score} </h3>
        <br></br>
        <h2 onClick={props.startGame} style={{cursor:'pointer'}} className="startbutton">RESTART</h2>
    </div>
}

export default gameover;