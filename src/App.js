import React, { Component } from "react";

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  div = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 / n2
    });
  };

  som = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 + n2
    });
  };

  sub = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 - n2
    });
  };

  mul = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 * n2
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  remove = () => {
    this.setState({
      n1: '',
      n2: '',
      res: '',
    })
  }


  render() {
    return (
      <div>
        <h1>Calc App</h1>
        <input onChange={this.handleChange1} value={this.state.n1} />
        <input onChange={this.handleChange2} value={this.state.n2} />
        <button onClick={this.div}>/</button>
        <button onClick={this.mul}>*</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.som}>+</button>
        <button onClick={this.remove}>Delete</button>

      <h3> {this.state.res} </h3>

      </div>
    );
  }
}

export default App;
