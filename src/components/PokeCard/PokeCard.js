import React from "react";
import "./PokeCard.css";

const PokeCard = props => (
  <div className="card">
    <div className="img-container">
    <span onClick={() => props.selectPokemon(props.id)} className={props.CurrentScore === 0 ? "pokedex-entry" : ""} > 
      <img className="dexter" alt={props.name} src={props.image} />
      </span>
    </div>
  </div>
);

export default PokeCard;
