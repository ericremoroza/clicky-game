import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import PokeCard from "./components/PokeCard";
import Nav from "./components/Nav";
import './App.css';
import pokemon from "./pokemon.json";



class App extends Component {
  state = {
    message: "Begin by clicking on an image!",
    currentScore: 0,
    topScore: 0,
    pokemon: pokemon,
    unselectedMon: pokemon
  }

  shufflePokemon = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game: Pokémon Edition</Title>
        <Nav
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        {this.state.pokemon.map(pokeEntry => (
          <PokeCard
          name={pokeEntry.name}
          image={pokeEntry.image}
          />
        ))}
      </Wrapper>



    );
  }
}

export default App;
