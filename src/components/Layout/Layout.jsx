import React from 'react'
import Toolbar from '../Toolbar/Toolbar'

const layout = (props) => (
    <div>
        <Toolbar pageTitle={props.pageTitle} />
        {props.children}
    </div>
)

export default layout;