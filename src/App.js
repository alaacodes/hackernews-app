import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const helloWorld = "Welcome to the Road to learn React!";
    const name = "Al-amin Ahmed";
    const age = 25;

    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h3>
          Hello, my name is {name} and I am {age} years old.{" "}
        </h3>
      </div>
    );
  }
}
export default App;
