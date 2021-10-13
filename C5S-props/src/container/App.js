import "./style/App.css";
import Can from "../component/Can";

function App() {
  return (
    <div className="App">
      Clientes caninos de Veterinaria
      <Can
        nombre="Firulais"
        edad="11"
        sexo="Macho"
        raza="Pastor aleman"
        tamaño="grande"
      />
      <Can nombre="Maya" edad="13" sexo="Hembra" raza="Pug" tamaño="chico" />
      <Can
        nombre="Pipo"
        edad="5"
        sexo="Macho"
        raza="Schnauzer"
        tamaño="mediano"
      />
      <Can
        nombre="Pacha"
        edad="2"
        sexo="Hembra"
        raza="Mestizo"
        tamaño="Chico"
      />
    </div>
  );
}

export default App;
