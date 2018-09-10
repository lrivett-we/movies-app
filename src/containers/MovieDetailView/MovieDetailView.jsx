import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import API_KEY from '../../auth/auth.js';
import './MovieDetailView.css';

const movies_path = 'https://api.themoviedb.org/3/movie';

class MovieDetailView extends Component {
    state = {
        connected: false
    }

    constructor(props) {
        super(props);
        this.updateMovieDetails();
    }

    updateMovieDetails = () => {
        // query the list of movies and use it to update the state
        axios.get(movies_path + `/${this.props.match.params.id}`, {params: {api_key: API_KEY}})
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
            return null;
        }
        return (
            <Layout pageTitle="Movie Details">
                <div>
                    <header className="MovieTitleHeader"><span>{this.state.movie.original_title}</span></header>
                    <img src={`http://image.tmdb.org/t/p/w185//${this.state.movie.poster_path}`} /><br/>
                    <span>{this.state.movie.release_date}</span><br/>
                    <span>{this.state.movie.vote_average}/10</span>
                    <p>{this.state.movie.overview}</p>
                </div>
            </Layout>
        )
    }
}

export default MovieDetailView;