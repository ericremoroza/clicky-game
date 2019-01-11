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
  
  selectPokemon = id => {
    
    const findMon = this.state.unselectedMon.find(item => item.id === id);
    if (findMon === undefined) {
      this.setState({
        message: "Not very effective",
        currentScore: 0,
        topScore: this.state.currentScore > this.state.topScore ? this.state.currentScore : this.state.topScore,
        pokemon: pokemon,
        unselectedMon: pokemon
      });
    } else {
      const newMon = this.state.unselectedMon.filter(item => item.id !== id);
      this.setState({
        message: "It's super effective!",
        currentScore: this.state.currentScore + 1,
        pokemon: pokemon,
        unselectedMon: newMon
      });
    }
    
    this.shufflePokemon(pokemon);
  }

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
            key={pokeEntry.id}
            id={pokeEntry.id}
            name={pokeEntry.name}
            image={pokeEntry.image}
            selectPokemon={this.selectPokemon}
            currentScore={this.state.currentScore}
          />
        ))}
      </Wrapper>



    );
  }
}

export default App;
