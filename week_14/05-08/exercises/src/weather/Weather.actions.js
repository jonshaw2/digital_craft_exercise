import $ from 'jquery';
const WEATHER_APP_ID = '26704b87eb5aa4a6da19a0fbbdf7b7e5';

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

// redux-thunk with error handling
export function getWeather(query) {
  let asyncAction = function(dispatch) {
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
  };
  return asyncAction;
}
