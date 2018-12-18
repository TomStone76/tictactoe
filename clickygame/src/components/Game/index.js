import React, {Component} from "react";
import Header from "../Header";
import Nav from "../Nav/nav.js";
import Footer from "../Footer/footer.js"

class Game extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <Footer />
            </div>
        );
    }    
}

export default Game;
