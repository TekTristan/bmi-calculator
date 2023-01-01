import React from 'react';

class BMICalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      height: 0,
      bmi: 0,
      classification: '',
      measurementSystem: 'metric'
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
    let bmi;
    if (this.state.measurementSystem === 'metric') {
      bmi = this.state.weight / (this.state.height * this.state.height);
    } else {
      bmi =
        703 *
        (this.state.weight / (this.state.height * this.state.height));
    }
    this.setState({ bmi: bmi });
    this.determineClassification(bmi);
  };

  determineClassification = bmi => {
    if (bmi < 18.5) {
      this.setState({ classification: 'Underweight' });
    } else if (bmi >= 18.5 && bmi < 25) {
      this.setState({ classification: 'Normal weight' });
    } else if (bmi >= 25 && bmi < 30) {
      this.setState({ classification: 'Overweight' });
    } else {
      this.setState({ classification: 'Obese' });
    }
  };

  handleMeasurementSystemChange = event => {
    this.setState({ measurementSystem: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Weight:
          <input
            type="number"
            name="weight"
            value={this.state.weight}
            onChange={this.handleChange}
          />
          {this.state.measurementSystem === 'metric' ? 'kg' : 'lbs'}
        </label>
        <br />
        <label>
          Height:
          <input
            type="number"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          {this.state.measurementSystem === 'metric' ? 'm' : 'in'}
        </label>
        <br />
        <button type="submit">Calculate BMI</button>
        <br />
        <label>
          Measurement system:
          <select value={this.state.measurementSystem} onChange={this.handleMeasurementSystemChange}>
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </label>
        <br />
        <p>Your BMI is: {this.state.bmi}</p>
        <p>You are classified as: {this.state.classification}</p>
        ) : (
          ''
        )}
      </form>
    );
  }
}

export default BMICalculator;
