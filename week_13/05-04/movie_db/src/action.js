import $ from 'jquery';
const MOVIE_DB_ID = '863fb8daffb549fea1f31324e6c9eddd';

export function changeName(name) {
  return {type: 'changeName', value: name};
}

function movieInfo(data) {
  return {type: 'movie_info', payload: data};
}

export function getMovie(query){
    return function(dispatch){
      console.log('query',query);
      $.ajax({
        url:'https://api.themoviedb.org/3/search/movie',
        data: {
          query: query,
          api_key: '863fb8daffb549fea1f31324e6c9eddd'
        }
      })
      .then(data => dispatch(movieInfo(data)));
    }
}
