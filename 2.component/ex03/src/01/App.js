import React from 'react';

export default function () {
    return (
        <div>
            <h1
                onClick={e => console.log('Click!')}
                style={{
                    cursor: 'pointer'
                }}
                >Inline Handler</h1>
        </div>
    );
}