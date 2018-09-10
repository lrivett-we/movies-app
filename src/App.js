import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout'
import MovieSelector from './containers/MovieSelector/MovieSelector'
import PosterGrid from './components/PosterGrid/PosterGrid'
import MovieDetailView from './containers/MovieDetailView/MovieDetailView';


/*
* https://api.themoviedb.org/3/movie/550?api_key=5d1c10a50fcbc080eb1e67449233dfc2
*
* http://image.tmdb.org/t/p/w185//<poster_path>
*/

const TMDB_API_KEY = '5d1c10a50fcbc080eb1e67449233dfc2';

const movies_path = 'https://api.themoviedb.org/3/movie/popular';

class App extends Component {
  state = {
    pageTitle: 'Popular Movies'
  }

  /*
  state = {
    apiKey: TMDB_API_KEY,
    movies: [],
    connected: false,
    pageTitle: 'Popular Movies'
  }

  componentDidMount = () => {
      this.updateMovieList();
  }

  movieSelectedHandler = (movie_id) => {
      // called when a poster is clicked on
      const movie = this.state.movies.find((movie) => movie.id === movie_id);
      alert(movie.original_title);
  }

  updateMovieList = () => {
      // query the list of movies and use it to update the state
      axios.get(movies_path, {params: {api_key: this.state.apiKey}})
        .then((response) => {
          const newMovies = response.data.results.map(
            ({original_title, poster_path, overview, release_date, id, backdrop_path, vote_average}) => 
              ({original_title, poster_path, overview, release_date, id, backdrop_path, vote_average}));
          this.setState({movies: newMovies, connected: true});
        }).catch((error) => {
          this.setState({connected: false});
        });
  }*/

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/*<Layout pageTitle={this.state.pageTitle}>
              {/*<PosterGrid movies={this.state.movies} movieSelected={this.movieSelectedHandler} />*  
            </Layout>*/} 
          <Route path='/movie/:id' component={MovieDetailView} />
          <Route path='/' exact component={MovieSelector} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
