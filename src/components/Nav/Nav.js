import React from "react";
import "./Nav.css";

const Nav = props => (
    <ul className="navBarThingy">
        
            <li id="linkTitle">
                <a href="/">Clicky Game</a>
            </li>
            <li id="right-wrong">{props.message}</li>
            <li id="scoreTick">Score: {props.currentScore} | Top Score: {props.topScore}</li>
            
       
    </ul>
)

export default Nav;