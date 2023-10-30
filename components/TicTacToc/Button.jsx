const Button = ({ resetGame, border }) => {
    return <button onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
    onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}} className="cursor-none" onClick={() => resetGame()}>New Game</button>;
};

export default Button;