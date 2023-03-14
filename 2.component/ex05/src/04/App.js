import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {

    let date = new Date();
    // 10의 배수일 때 사라짐
    const [ticks, setTicks] = useState(1);
    
    useEffect(() => {
        /* mount 후 */
        setInterval(() => {
            setTicks((ticks) => ticks+1);
            date = new Date();
            console.log(ticks);
        }, 1000);

        return (function() {
            /* unmount */
            console.log('After Unmount(componentWillUnmount)');
        });
    }, []);
    

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