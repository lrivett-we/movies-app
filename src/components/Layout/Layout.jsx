import React from 'react'
import { withRouter } from 'react-router-dom'
import Toolbar from '../Toolbar/Toolbar'
import './Layout.css'

const layout = (props) => {

    return (<div>
        <Toolbar pageTitle={props.pageTitle} withBackButton={!props.defaultPage} />
        <div className='LayoutContent'>
            {props.children}
        </div>
    </div>)
}

export default withRouter(layout);