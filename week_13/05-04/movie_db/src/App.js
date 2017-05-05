import React from 'react';

export default class App extends React.Component {
  render() {
    let movie = this.props.movieData;
    let movieDisplay;
    if (movie) {
      console.log('in movie existed');
      console.log(movie);
      console.log(movie.original_title)
      console.log(movie.results);
      console.log(movie.results[0].original_title);
      movieDisplay = <div>
                      {movie.results.map((title, idx) =>
                      <p key={idx}>{title.original_title}
                      <img src={"https://image.tmdb.org/t/p/w500/"+title.backdrop_path}/>
                      </p>
                      )}
                    </div>
      console.log(movieDisplay);
      // movieDisplay = <div>wheeee</div>;
      // console.log(movieDisplay);
      console.log('end of map');
    }
    else{

      movieDisplay = <p>booyabooya yo{this.props.error}</p>;
    }

    return (
      <div>
        happy something
        {movieDisplay}
        {this.props.question}

        <input type = "text" value={this.props.name}
        onChange={event =>
        this.props.changeName(event.target.value)}/>

        <button onClick={() =>
        this.props.getMovie(this.props.name)}>Get Movie

        </button>


      </div>
    )
  };
}
