import React from "react";
import "./style.css";


function Container(props) {
    return (
        <div className="card" data-clicked={props.clicked}>
            <div className="img-container">
                <img onClick={() => props.handleClick(props.id, props.clicked)} alt={props.alt} src={props.path} />
            </div>
        </div>
    );
}

export default Container;