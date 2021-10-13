import React from "react";

function Can(props) {
  return (
    <>
      <div>Nombre: {props.nombre}</div>
      <ul>
        <li>Edad: {props.edad}</li>
        <li>Sexo: {props.sexo}</li>
        <li>Raza: {props.raza}</li>
        <li>Tamaño: {props.tamaño}</li>
      </ul>
    </>
  );
}

export default Can;
