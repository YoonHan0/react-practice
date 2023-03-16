import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            date: new Date(),
            session: true,
            handleClockTime() {
                console.log("\n=============\n" + this);
                this.setState({date: new Date()}).bind(this);
            }
        }
    }
    

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours={this.state.date.getHours()}
                        minutes={this.state.date.getMinutes()}
                        seconds={this.state.date.getSeconds()}
                        session={this.state.session} />
            </div>
        );
    }
}