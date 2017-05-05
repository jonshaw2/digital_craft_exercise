import $ from 'jquery';
const WEATHER_APP_ID = 'd572e3897b56c1638fada0388125c161';

export function changeName(name) {
  return { type: 'changeName', value: name };
}

export function startGetWeather() {
  return { type: 'start_get_weather' };
}

function weatherInfo(data) {
  return { type: 'weather_info', payload: data };
}

function weatherError(resp) {
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
  return { type: 'weather_error', error: error };
}

function fetchingWeatherInfo() {
  return { type: 'fetch_weather' };
}

// redux-thunk
export function getWeather(query) {

  return function(dispatch) {
    console.log('query', query);
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      data: {
        q: query,
        units: 'imperial',
        APPID: WEATHER_APP_ID
      }
    })
    .then(data => dispatch(weatherInfo(data)));
  }
}

// redux-thunk with error handling
export function getWeather2(query) {
  return function(dispatch) {
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      data: {
        q: query,
        units: 'imperial',
        APPID: WEATHER_APP_ID
      }
    })
    .then(data => dispatch(weatherInfo(data)))
    .catch(resp => dispatch(weatherError(resp)))
  }
}

// redux-thunk with loading indicator
export function getWeather3(query) {
  return function(dispatch) {
    dispatch(fetchingWeatherInfo());
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      data: {
        q: query,
        units: 'imperial',
        APPID: WEATHER_APP_ID
      }
    })
    .then(data => dispatch(weatherInfo(data)))
    .catch(resp => dispatch(weatherError(resp)))
  }
}

// redux-promise with error handing
export const getWeather4 = (query) =>
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    data: {
      q: query,
      units: 'imperial',
      APPID: WEATHER_APP_ID
    }
  })
  .then(data => weatherInfo(data))
  .catch(resp => weatherError(resp));

// redux-promise with payload property as a promise
export function getWeather5(query) {
  let promise = $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    data: {
      q: query,
      units: 'imperial',
      APPID: WEATHER_APP_ID
    }
  });
  return {
    type: 'weather_info',
    payload: promise
  };
}
