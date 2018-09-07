import React from 'react'
import './Toolbar.css'

const toolbar = (props) => (
    <header className='Toolbar'><h1>{props.pageTitle}</h1></header>
)

export default toolbar;