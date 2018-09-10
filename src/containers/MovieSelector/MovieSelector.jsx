// TODO - delete this file, it should not be used.

import React, { Component } from 'react'
import axios from 'axios'
import PosterGrid from '../../components/PosterGrid/PosterGrid'
import Layout from '../../components/Layout/Layout';

const TMDB_API_KEY = '5d1c10a50fcbc080eb1e67449233dfc2';
const movies_path = 'https://api.themoviedb.org/3/movie/popular';

class MovieSelector extends Component {
    state = {
        apiKey: TMDB_API_KEY,
        movies: [],
        connected: false,
        pageTitle: 'Popular Movies'
      }
    
      componentDidMount = () => {
          this.updateMovieList();
      }
    
      updateMovieList = () => {
          axios.get(movies_path, {params: {api_key: this.state.apiKey}})
            .then((response) => {
              const newMovies = response.data.results.map(
                ({original_title, poster_path, overview, release_date, id, backdrop_path, vote_average}) => 
                  ({original_title, poster_path, overview, release_date, id, backdrop_path, vote_average}));
              this.setState({movies: newMovies, connected: true});
            }).catch((error) => {
              this.setState({connected: false});
            });
      }

    render() {
        return <Layout pageTitle="Popular Movies" defaultPage><PosterGrid movies={this.state.movies}  /></Layout>
    }
}

export default MovieSelector