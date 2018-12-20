import React, {Component} from "react";
import Header from "../Header";
import Nav from "../Nav/nav.js";
import Footer from "../Footer/footer.js"
import Container from "../Container/container.js"
import animals from "./animals.json";
import Wrapper from "../Wrapper";
import Message from "../NavMessage/message.js";

function shuffle(arr) { 
    let j, x, i;       
    for (let i = arr.length - 1; i > 0; i--) {   
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x
    }
    return arr;
}

class Game extends Component {

    restart() {
        // console.log(animals);
        var tmp = this.state.animals;
        tmp.map(animal=>animal.clicked = false)
        console.log(tmp)
        this.setState({ score: 0, 
        animals:tmp});
        
    }

    handleClick = (id, selected) => {
        if (selected) {
            this.restart();
        } else {
            var clicked = this.state.animals.findIndex(animal => animal.id == id);
            let temp = this.state.animals;
            temp[clicked].clicked = true;
            // let shuffled = shuffle(this.state.animals);
            let shuffled = shuffle(temp);
            if (this.state.score + 1 > this.state.topScore) {
                this.setState({topScore: this.state.score + 1, 
                    score: this.state.score+1, 
                    animals: shuffled
                }); 
            } else {
                this.setState({
                    score: this.state.score+1, 
                    animals: shuffled
                })
            }
            
        }

    }

    state = {
        animals,
        score: 0,
        topScore: 0,
        message: "Click an image to begin"
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Nav>
                    <Message 
                        score={this.state.score}
                        topScore={this.state.topScore}
                        message={this.state.message}
                    />
                </Nav>
                <Header />
                <div>
                    <Wrapper>
                    {this.state.animals.map(animal => (
                    <Container 
                        handleClick={this.handleClick}
                        id={animal.id}
                        key={animal.id}
                        path={animal.path}
                        alt={animal.alt}
                        clicked={animal.clicked}
                    />
                    ))}
                    </Wrapper>
                </div>
                <Footer />
            </div>
        );
    }
}


export default Game;
