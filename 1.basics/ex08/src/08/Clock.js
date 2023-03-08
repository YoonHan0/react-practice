import React from 'react'

function Clock() {
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    return (
        /* 
            comment01: JSX 밖은 JavaScript 구문(주석 구문)이 가능하다.
        */
        <div 
            /* comment02: 여기서도 주석이 가능하다: 비추비추 */
            className='clock' title='시계'>
            {
                /* comment03: 이런 방식으로도 가능, 이렇게 블록안에서 주석을 달아야 한다!! 강강추 */
            }
            {
                /* 
                    comment04: JSX는 HTML이 아니다!!!
                    <!-- --> HTML 주석은 사용할 수 없드아
                */
            }

            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            {':'}
            {('0' + minutes).slice(-2)}
            {':'}
            // comment05: 이렇게 달면 그대로 출력됨
            {('0' + seconds).slice(-2)}
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    )
}

export default Clock