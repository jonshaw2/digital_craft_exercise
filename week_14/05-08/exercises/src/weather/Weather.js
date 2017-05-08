import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Weather.actions';
import { Link } from 'react-router';



class Weather extends React.Component {

  componentDidMount(){
    this.props.getWeather(this.props.params.city)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.city !== newProps.params.city) {
      this.props.getWeather(newProps.params.city);
    }
  }

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
    let city = this.props.params.city;
    console.log(city);
    if (city === undefined){
      city = 'atlanta'
    }


    const favorites = () =>
      <div>
        <ul className="nav">
          <li><Link to="/weather/Atlanta">Atlanta</Link></li>
          <li><Link to="/weather/Houston">Houston</Link></li>
          <li><Link to="/weather/New+York">New York</Link></li>
          <li><Link to="/weather/San+Francisco">San Francisco</Link></li>
        </ul>
      </div>

    return (

      <div>
      <br/><br/>

      Favorites: <br/>
      {favorites()}

      {weatherDisplay}
      </div>
    );
  }
}

const WeatherContainer = ReactRedux.connect(
  state => state.weather,
  actions
)(Weather);

export default WeatherContainer;
