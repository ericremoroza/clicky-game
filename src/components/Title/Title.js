import React from "react";
import "./Title.css";

const Title = props => (
    <div className="titleBox">
        <h1>{props.children}</h1>
    </div>

);

export default Title;

