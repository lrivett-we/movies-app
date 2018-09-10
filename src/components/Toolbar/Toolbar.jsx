import React from 'react'
import { Link } from 'react-router-dom'
import './Toolbar.css'

const toolbar = (props) => {
    let backButton = null;
    if (props.withBackButton){
        backButton = <Link to='/'><button>BACK</button></Link>
    }

    return (
        <header className='Toolbar'>
            {backButton}
            <h1>{props.pageTitle}</h1>
        </header>
    )
}

export default toolbar;