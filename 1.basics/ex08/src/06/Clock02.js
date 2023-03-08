import React from 'react'

function Clock02() {
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    return (
        <div>
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            {':'}
            {minutes}
            {':'}
            {seconds}
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    )
}

export default Clock02