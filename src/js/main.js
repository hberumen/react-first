import React from 'react';
import ReactDOM from 'react-dom';

export default class HolaMundo extends React.Component {
  render() {
    return <h1>¡Hola Mundo!</h1>;
  }
}

ReactDOM.render(<HolaMundo />, document.getElementById("app"));
