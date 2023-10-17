import React, { Component } from "react";
 // Import your CSS file
 
class SnakeGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: false,
      foodX: 0,
      foodY: 0,
      snakeX: 5,
      snakeY: 5,
      velocityX: 0,
      velocityY: 0,
      snakeBody: [],
      setIntervalId: null,
      score: 0,
      highScore: localStorage.getItem("high-score") || 0,
    };
  }

  componentDidMount() {
    this.updateFoodPosition();
    this.setIntervalId = setInterval(this.initGame, 200);
    document.addEventListener("keyup", this.changeDirection);
  }

  componentWillUnmount() {
    clearInterval(this.setIntervalId);
    document.removeEventListener("keyup", this.changeDirection);
  }

  updateFoodPosition = () => {
    // Passing a random 1 - 30 value as food position
    super.foodX = Math.floor(Math.random() * 30) + 1;
    super.foodY = Math.floor(Math.random() * 30) + 1;
  };

  handleGameOver = () => {
    // Handle game over code
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
  };

  changeDirection = (e) => {
    // Change direction code
    if(e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
  };

  initGame = () => {
    // Initialize game code
    if(gameOver) return handleGameOver();
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
  };

  render() {
    return (
      <div className="wrapper">
        <div className="game-details">
          <span className="score">Score: {this.state.score}</span>
          <span className="high-score">High Score: {this.state.highScore}</span>
        </div>
        <div className="play-board">{/* Add game board elements here */}</div>
        <div className="controls">{/* Add control buttons here */}</div>
      </div>
    );
  }
}

export default SnakeGame;
