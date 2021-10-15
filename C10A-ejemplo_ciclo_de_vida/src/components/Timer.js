import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: this.props.initialTime,
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((currentState) => {
        return { time: currentState.time - 1 };
      });
    }, 1000);
  }

  // Método del ciclo de vida que se ejecuta antes de que el componente sea eliminado del dom
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h2>{this.state.time}</h2>;
  }
}

export default Timer;
