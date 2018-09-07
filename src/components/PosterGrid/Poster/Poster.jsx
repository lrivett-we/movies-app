import React from 'react'
import './Poster.css'

const poster = (props) => <img className='Poster' src={props.imageSrc} alt={props.movieName} onClick={props.clickFunction} />

export default poster;