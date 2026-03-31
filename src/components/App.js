import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name1: "",
      name2: "",
      result: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  calculateFLAMES = () => {
    const { name1, name2 } = this.state;

    if (!name1 || !name2) {
      this.setState({ result: "Please Enter valid input" });
      return;
    }

    let arr1 = name1.split("");
    let arr2 = name2.split("");

    // Remove common letters (case-sensitive)
    for (let i = 0; i < arr1.length; i++) {
      let index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1.splice(i, 1);
        arr2.splice(index, 1);
        i--;
      }
    }

    const count = arr1.length + arr2.length;
    const mod = count % 6;

    let output = "";

    switch (mod) {
      case 1:
        output = "Friends";
        break;
      case 2:
        output = "Love";
        break;
      case 3:
        output = "Affection";
        break;
      case 4:
        output = "Marriage";
        break;
      case 5:
        output = "Enemy";
        break;
      case 0:
        output = "Siblings";
        break;
      default:
        output = "";
    }

    this.setState({ result: output });
  };

  clearAll = () => {
    this.setState({
      name1: "",
      name2: "",
      result: "",
    });
  };

  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}

        <input
          data-testid="input1"
          name="name1"
          value={this.state.name1}
          onChange={this.handleChange}
        />

        <input
          data-testid="input2"
          name="name2"
          value={this.state.name2}
          onChange={this.handleChange}
        />

        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={this.calculateFLAMES}
        >
          Calculate Relationship Future
        </button>

        <button
          data-testid="clear"
          name="clear"
          onClick={this.clearAll}
        >
          Clear
        </button>

        <h3 data-testid="answer">{this.state.result}</h3>
      </div>
    );
  }
}

export default App;