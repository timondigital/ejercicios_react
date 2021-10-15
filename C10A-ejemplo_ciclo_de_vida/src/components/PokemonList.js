import React from "react";
import data from "../pokemons.json";
import Pokemon from "./Pokemon";

class PokemonList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      pokemonList: [],
    };
  }

  // Método del ciclo de vida que se ejecuta luego del primer render
  componentDidMount() {
    this.fetchPokemons(this.props.type);
  }

  // Método del ciclo de vida que se ejecuta después de cada render excepto el primero
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.type !== this.props.type) {
      this.fetchPokemons(this.props.type);
    }
  }

  fetchPokemons = (type) => {
    let pokemonList = [];
    if (type) {
      pokemonList = data.filter((pokemon) => {
        return pokemon.type.indexOf(type) >= 0;
      });
    } else {
      pokemonList = data;
    }

    this.setState({ pokemonList: pokemonList });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.pokemonList.map((pokemon) => {
            return (
              <Pokemon key={`pokemon_${pokemon.id}`} name={pokemon.name} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PokemonList;
