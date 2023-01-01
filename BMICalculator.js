import React from 'react';

class BMICalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      height: 0,
      bmi: 0
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const bmi = this.state.weight / (this.state.height * this.state.height);
    this.setState({ bmi: bmi });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Weight (kg):
          <input
            type="number"
            name="weight"
            value={this.state.weight}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Height (m):
          <input
            type="number"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button type="submit">Calculate BMI</button>
        <br />
        <p>Your BMI is: {this.state.bmi}</p>
      </form>
    );
  }
}

export default BMICalculator;
