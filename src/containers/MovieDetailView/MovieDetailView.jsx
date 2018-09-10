import React, { Component } from 'react';
import axios from 'axios';

const TMDB_API_KEY = '5d1c10a50fcbc080eb1e67449233dfc2';

const movies_path = 'https://api.themoviedb.org/3/movie/popular';

class MovieDetailView extends Component {
    state = {
        connected: false
    }

    updateMovieList = () => {
        // query the list of movies and use it to update the state
        axios.get(movies_path + `/${this.props.match.params.id}`, {params: {api_key: this.state.apiKey}})
          .then((response) => {
            console.log(response.data);
            const {original_title, poster_path, overview, release_date, id, backdrop_path, vote_average} = response.data;
            this.setState({movie: {original_title, poster_path, overview, release_date, id, backdrop_path, vote_average}, connected: true})
          }).catch((error) => {
            this.setState({connected: false});
          });
    }

    render () {
        if (!this.state.connected){
            return <p>No result found.</p>
        }
        return <h1>{this.state.movie.original_title}</h1>
    }
}

export default MovieDetailView;