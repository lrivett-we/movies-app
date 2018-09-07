// TODO - delete this file, it should not be used.

import React, { Component } from 'react'
import axios from 'axios'

/*
 * {
  "page": 1,
  "total_results": 19833,
  "total_pages": 992,
  "results": [
    {
      "vote_count": 7700,
      "id": 299536,
      "video": false,
      "vote_average": 8.3,
      "title": "Avengers: Infinity War",
      "popularity": 234.221,
      "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      "original_language": "en",
      "original_title": "Avengers: Infinity War",
      "genre_ids": [
        12,
        878,
        14,
        28
      ],
      "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
      "adult": false,
      "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      "release_date": "2018-04-25"
    }, 
 */

class MovieSelector extends Component {
    state = {
        movies: []
    }

    componentDidMount = () => {
        this.getMovieList(props.apiKey);
    }

    movieSelectedHandler = (movie) => {
        // called when a poster is clicked on
    }

    getMovieList = (apiKey) => {
        // query the list of movies and use it to update the state
    }

    render() {
        

        return null;
    }
}
