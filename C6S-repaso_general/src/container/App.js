import "../style/App.css";
import Class from "../component/ClassComponent";
import Funcional from "../component/FunctionComponent";

function App() {
  return (
    <div className="App">
      <h3>Invitados:</h3>
      <Class nombre="Nicolas" estaEnListo={true} />
      <Class nombre="Ivan" estaEnListo={false} />
      <Class nombre="Carolina" estaEnListo={true} />

      <h3>Tareas:</h3>
      <Funcional nombre="Nicolas" tarea="papas fritas" />
      <Funcional nombre="Ivan" tarea="pizzas" />
      <Funcional nombre="Carolina" tarea="bebida" />
    </div>
  );
}

export default App;
