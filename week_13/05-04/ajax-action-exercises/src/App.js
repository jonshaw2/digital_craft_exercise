import React from 'react';

export default class App extends React.Component {
  render() {
    let weather = this.props.weatherData;
    let weatherDisplay;
    if (weather) {
      weatherDisplay = <p>
        The weather in {weather.name} is:
        {weather.main.temp} degrees F<br/>
        with a high of {weather.main.temp_max} F<br/>
        and a low of {weather.main.temp_min} F.
      </p>;
    } else if (this.props.isFetching) {
      weatherDisplay = <p><img src="/images/gears.gif" alt="loading"/></p>;
    } else if (this.props.error) {
      weatherDisplay = <p>{this.props.error}</p>;
    }
    return (
      <div>
        <input type="text" value={this.props.name}
          onChange={event => this.props.changeName(event.target.value)}/>
        <button onClick={() => this.props.getWeather(this.props.name)}>Get Weather with redux-thunk</button>
        <button onClick={() => this.props.getWeather2(this.props.name)}>Get Weather with redux-thunk with erron handling</button>
        <button onClick={() => this.props.getWeather3(this.props.name)}>Get Weather with redux-thunk with erron handling and loading indicator</button>
        <button onClick={() => this.props.getWeather4(this.props.name)}>Get Weather with redux-promise with error handling</button>
        <button onClick={() => this.props.getWeather5(this.props.name)}>Get Weather with redux-promise with payload property as a promise (no error handling)</button>
        {weatherDisplay}
      </div>
    );
  }
}
