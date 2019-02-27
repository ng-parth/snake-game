import React from 'react';
import './App.css';

const playground = (props) => {
    return <div>
        <h1 className="gamename"> CLASSIC SNAKE GAME </h1>
        <h3 className="score">SCORE {props.score}</h3>
        <div className="playground">
            {
                props.playground.map((row, i) => (
                    row.map((cell) => {

                        if (props.isHead(cell) || props.isBody(cell))
                            cell.type = `cell snakebodycell`;
                        else if (props.isFood(cell))
                            cell.type = `cell foodcell`;
                        else
                            cell.type = `cell`;

                        return <div key={`${cell.row} ${cell.col}`} className={cell.type}></div>
                    })
                ))
            }
        </div>
    </div>
}

export default playground;