import React from 'react';
import Poster from './Poster/Poster';
import './PosterGrid.css';

const posterGrid = (props) => {
    const posters = props.movies.map((movie) => 
        <Poster
            key={movie.id} 
            imageSrc={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`} 
            movieName={movie.original_title}
            movieId={movie.id}
            clickFunction={() => props.movieSelected(movie.id)} 
        />
    );

    return (<div className="PosterGrid">
        {posters}
    </div>)
}

export default posterGrid;