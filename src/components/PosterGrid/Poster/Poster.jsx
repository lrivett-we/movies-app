import React from 'react'
import { Link } from 'react-router-dom' 
import './Poster.css'

const poster = (props) => (
    <Link className='Poster' to={`/movie/${props.movieId}`}>
        <img  src={props.imageSrc} alt={props.movieName} />
    </Link>
)

export default poster;