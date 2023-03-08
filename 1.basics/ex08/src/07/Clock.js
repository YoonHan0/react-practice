import React from 'react'

function Clock() {
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const htmls = 
        "<span>" +
        ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2) +
        ":" +
        ('0' + minutes).slice(-2) +
        ":" +
        ('0' + seconds).slice(-2) +
        " " +
        (hours > 12 ? 'PM' : 'AM') +
        "</span>";

    const o = {
        __html: htmls
    };
    return (
        /* 
            HTML 태그를 동적으로 생성하여 JSX Element의 특정 속성(dangerouslySetInnerHTML)으로 
            Rendering 하는 작업은 금하고 있지만..!
            XSS(Cross-Site-Scripting) 보호 기능을 끄고 사용할 수 있다.
        */
        <div dangerouslySetInnerHTML={o}></div>
    )
}

export default Clock