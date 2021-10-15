import React from "react";
import PokemonList from "./PokemonList";

const types = ["Grass", "Fire", "Water", "Flying"];

class PokemonApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentType: null,
    };
  }

  render() {
    return (
      <div>
        <div>
          {types.map((type) => (
            <div key={`type_${type}`}>
              <label>
                <input
                  type="radio"
                  value={type}
                  name="type"
                  onChange={(e) => {
                    this.setState({ currentType: e.target.value });
                  }}
                />
                {type}
              </label>
            </div>
          ))}
        </div>
        <PokemonList type={this.state.currentType} />
      </div>
    );
  }
}

export default PokemonApp;
