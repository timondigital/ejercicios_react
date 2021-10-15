import "./App.css";
import React from "react";
import Pedido from "./Pedido";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orden: "",
      enProceso: false,
    };
  }

  //luego de 2 segundo se actualiza el componente
  componentDidMount() {
    setTimeout(() => this.setState({ orden: "pizza", enProceso: true }), 2000);
  }

  componentDidUpdate() {
    console.log("se realizo el pedido");
  }
  pedir = () => {
    this.setState({ orden: "hamburguesas", enProceso: true });
  };
  componentWillUnmount() {
    alert("tu pedido ha sido cancelado");
  }

  cancelar = () => {
    this.state.enProceso
      ? this.setState(
          { enProceso: false, orden: "sin pedidos aun" },
          this.componentWillUnmount()
        )
      : alert("no hay pedido que puedas cancelar");
  };

  render() {
    return (
      <div className="App">
        {this.state.enProceso ? (
          <Pedido text={this.state.orden} />
        ) : (
          <Pedido text={this.state.orden} />
        )}
        <button onClick={this.cancelar}>Cancelar pedido</button>
        <button onClick={this.pedir}>Hacer pedido</button>
      </div>
    );
  }
}

export default App;
