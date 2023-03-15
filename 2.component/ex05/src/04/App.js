import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {

    let date = new Date();
    // 10의 배수일 때 사라짐
    const [ticks, setTicks] = useState(1);
    
    /* 방법1: Closure를 발생시키지 않는 코드 */
    useEffect(() => {
        /* mount 후 */
        const interval = setInterval(() => {
            setTicks((ticks) => ticks+1);
            date = new Date();
            console.log(ticks);
        }, 1000);

        return (function() {
            /* unmount */
            console.log('After Unmount(componentWillUnmount)');
            clearInterval(interval) // clearInterval 해줘야 끝나는 듯
        });
    }, []);

    /* 방법2: setTimeout()을 이용해서 한 번만 실행시킴, useEffect()를 이용해서 date가 변경될 때마다 실행 
             Closure가 한 번만 발생함
    */
    // useEffect(() => {
    //     setTimeout(() => {
    //         setTicks(ticks+1);
    //         date = new Date();
    //         console.log(ticks);
    //     }, 1000);
    // }, [date]);
    
    return (
        
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null :
                <Clock
                message={'ex05: useEffect Hook example'}
                hours={date.getHours()}
                minutes={date.getMinutes()}
                seconds={date.getSeconds()}/>
            }
        </div>
            
    );
}