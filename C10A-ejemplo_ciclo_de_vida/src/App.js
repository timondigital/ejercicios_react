import React from "react";
import Timer from "./components/Timer";
import Button from "./components/Button";
import PokemonApp from "./components/PokemonApp";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTimer: false,
    };
  }

  handleInitTimer = () => {
    this.setState({ showTimer: true });
  };

  handleFinishTimer = () => {
    this.setState({ showTimer: false });
  };

  render() {
    return (
      <div>
        {/* si el estado showTimer es true el componente timer es montado, si es false se desmonta, deja de renderizarse  */}
        {this.state.showTimer ? (
          <>
            <Timer initialTime={200} />
            <Button text="Quitar Timer" onClick={this.handleFinishTimer} />
          </>
        ) : (
          <Button text="Iniciar Timer" onClick={this.handleInitTimer} />
        )}
        <br />
        <br />
        <br />
        <PokemonApp />
      </div>
    );
  }
}

export default App;
