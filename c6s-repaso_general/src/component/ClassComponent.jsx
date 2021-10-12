import React, { Component } from "react";

class ClassCompunent extends Component {
  // no es necesario constructos siempre
  //    constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <li>
        {this.props.nombre}
        {this.props.estaEnLista ? "está" : "no está"} invitado a la fiesta
      </li>
    );
  }
}

export default ClassCompunent;
