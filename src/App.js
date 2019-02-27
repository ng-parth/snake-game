import React, { Component } from 'react';
import Gameover from './Gameover';
import Playground from './Playground';
import StartScreen from './StartScreen';
import './App.css';

const totalRowCount = 40;
const totalColCount = 40;

const playground = [];

class App extends Component {
  constructor() {
    super();
    this.focusRef = React.createRef();
    this.createMap(playground);
  }

  placeFood = () => ({
    row: parseInt(Math.random() * totalRowCount),
    col: parseInt(Math.random() * totalColCount)
  });

  state = {
    startGame : true,
    playground,
    snake: {
      head: {
        row: parseInt(totalRowCount / 2),
        col: parseInt(totalColCount / 2)
      },
      body: [],
      direction: {
        x: 1,
        y: 0
      }
    },
    food: this.placeFood()
  }

  createMap = (playground) => {
    for (let row = 0; row < totalRowCount; row++) {
      const verticals = [];
      for (let col = 0; col < totalColCount; col++) {
        verticals.push({
          row,
          col
        });
      }
      playground.push(verticals);
    }
  }

  getSnakeSpeed = () => {
    let snakeSpeed = 100 - (this.state.snake.body.length * 20);
    return snakeSpeed > 25 ? snakeSpeed : 25;
  };

  componentDidMount = () => {
    this.focusRef.current.focus();
  }

  startGame = () => {
    this.setState({ 
      startGame: false, 
      gameOver: false,
      snake: {
        head: {
          row: parseInt(totalRowCount / 2),
          col: parseInt(totalColCount / 2)
        },
        body: [],
        direction: {
          x: 1,
          y: 0
        }
      }
    });

    setTimeout(() => {
      this.runGame();
    }, this.getSnakeSpeed());
  }

  runGame = () => {
    this.setState(() => {
      const foundFood = this.foundFood();
      const nextState = {
        snake: {
          ...this.state.snake,
          head: {
            row: this.state.snake.head.row + this.state.snake.direction.y,
            col: this.state.snake.head.col + this.state.snake.direction.x
          },
          body: [this.state.snake.head, ...this.state.snake.body]
        },
        food: foundFood ? this.placeFood() : this.state.food
      };

      if (nextState.snake.head.row === totalRowCount)
        nextState.snake.head.row = 0;
      else if (nextState.snake.head.row < 0)
        nextState.snake.head.row = totalRowCount - 1;

      if (nextState.snake.head.col === totalColCount)
        nextState.snake.head.col = 0;
      else if (nextState.snake.head.col < 0)
        nextState.snake.head.col = totalColCount - 1;

      if (!foundFood) nextState.snake.body.pop();

      return nextState;
    }, () => {
      const { snake } = this.state;
      if (this.isBody(snake.head)) {
        this.setState({
          gameOver: true
        })
        return;
      }

      setTimeout(() => {
        this.runGame();
      }, this.getSnakeSpeed());
    });
  }

  foundFood = () => this.state.food.row === this.state.snake.head.row && this.state.food.col === this.state.snake.head.col;

  changeDirection = (event) => {
    const { snake } = this.state;
    switch (event.keyCode) {
      case 38:
        if (snake.direction.y === 1) break;
        this.setState(({ snake }) => ({
          snake: {
            ...snake,
            direction: {
              x: 0,
              y: -1
            }
          }
        }));
        break;

      case 40:
        if (snake.direction.y === -1) break;
        this.setState(({ snake }) => ({
          snake: {
            ...snake,
            direction: {
              x: 0,
              y: 1
            }
          }
        }));
        break;

      case 39:
        if (snake.direction.x === -1) break;
        this.setState(({ snake }) => ({
          snake: {
            ...snake,
            direction: {
              x: 1,
              y: 0
            }
          }
        }));
        break;

      case 37:
        if (snake.direction.x === 1) break;
        this.setState(({ snake }) => ({
          snake: {
            ...snake,
            direction: {
              x: -1,
              y: 0
            }
          }
        }));
        break;

      default:
        break;
    }
  }

  isFood = cell => this.state.food.row === cell.row && this.state.food.col === cell.col;
  isHead = cell => this.state.snake.head.row === cell.row && this.state.snake.head.col === cell.col;
  isBody = (cell) => {
    return this.state.snake.body.find((inBody) => {
      return inBody.row === cell.row && inBody.col === cell.col
    })
  };

  render() {
    const { playground, snake, gameOver, startGame } = this.state;
    return (
      <div ref={this.focusRef} onKeyDown={(event) => this.changeDirection(event)} className="App" tabIndex="0" >
        {
          startGame ? <StartScreen startGame={this.startGame}/>
                    : gameOver ? <Gameover score={snake.body.length} startGame={this.startGame}/>
                               : <Playground playground={playground} isHead={this.isHead} isBody={this.isBody} isFood={this.isFood} score={snake.body.length}/>
        }

      </div>
    );
  }
}

export default App;
