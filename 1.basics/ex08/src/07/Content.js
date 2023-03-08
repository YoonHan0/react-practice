import React, { Fragment } from 'react';
import Clock from './Clock';

function Content() {
    const title = 'Dynamic HTML Rendering'
    return (
        <Fragment>
            <p>{title}</p>
            <Clock />
        </Fragment>
        
    );
}

export default Content;