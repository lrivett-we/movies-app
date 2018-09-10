import React from 'react'
import { withRouter } from 'react-router-dom'
import Toolbar from '../Toolbar/Toolbar'
import './Layout.css'

const layout = (props) => {
    console.log(props);
    let pageTitle = 'Popular Movies';
    //if (props.)

    return (<div>
        <Toolbar pageTitle={pageTitle} />
        <div className='LayoutContent'>
            {props.children}
        </div>
    </div>)
}

export default withRouter(layout);