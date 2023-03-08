import React, { Fragment } from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';

function Content() {
    const title = '특징3: JSX 표현식 표기법({js expression})'
    return (
        <Fragment>
            <p>{title}</p>
            <Clock01 />
            <Clock02 />
        </Fragment>
        
    );
}

export default Content;