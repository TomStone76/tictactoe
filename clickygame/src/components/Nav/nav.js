
import React from "react";
import Message from "../NavMessage/message.js"
import "./style.css"


function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {props.children}
        </nav>
    );
}

export default Nav;