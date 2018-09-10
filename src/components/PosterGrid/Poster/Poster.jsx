import React from 'react'
import { Link } from 'react-router-dom' 
import './Poster.css'

const poster = (props) => (
    <Link to={`/movie/${props.movieId}`}>
        <img className='Poster' src={props.imageSrc} alt={props.movieName} onClick={props.clickFunction} />
    </Link>
)

export default poster;