import React from 'react';
import Poster from './Poster/Poster';

const posterGrid = (props) => {
    const posters = props.movies.map((movie) => 
        <Poster 
            imageSrc={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`} 
            movieName={movie.original_title}
            onClick={() => props.movieSelected(movie.id)} 
        />
    );

    return (<div class="PosterGrid">
        {posters}
    </div>)
}

export default posterGrid;