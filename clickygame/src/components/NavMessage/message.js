import React from "react";

/*Use something like this: 
    state = {
        currentScore: 0
        highScore: 0
    };

    handleCurrentScore = () => {
        this.setState({ currentScore: this.state.currentScore + 1 })
    };

    handleHighScore = () => {
        this.setState({ highScore: this.state.highScore +1 })
    }
*/

function Message(props) {
    console.log(props)
    return (
        <div>
            <a className="navbar-brand" href="public/index.html">
                {props.message}
            </a>
            <ul>
                <span className="navbar-text">
                    <p>Current score: {props.score}</p>
                </span>
                <span className="navbar-text">
                    <p>High score: {props.topScore}</p> 
                </span>
            </ul>
        </div>
    );
}

export default Message;