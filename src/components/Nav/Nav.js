import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navBarThingy">
        
            <p id="linkTitle">
                <a href="/">Clicky Game</a>
            </p>
            <p id="right-wrong">{props.rightWrong}</p>
            <p id="scoreTick">Score: {props.currentScore} | Top Score: {props.topScore}</p>
            
       
    </nav>
)

export default Nav;