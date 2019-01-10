import React from "react";
import "./Nav.css";

const Nav = props => (
    <div className=" nav navBarThingy nav-justified">
        <div className="col-md-4" id="classLink">  <a href="/">Clicky Game</a></div>
        <div className="col-md-4">{props.message}</div>
        <div className="col-md-4" id="scoreTick">Score: {props.currentScore} | Top Score: {props.topScore}</div>
    </div>
)

export default Nav;