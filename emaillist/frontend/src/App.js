import React from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import './assets/css/App.css';

function App(props) {
    return (
        <div id='App' className={'App'}>
            <RegisterForm />
            <Searchbar />
            <Emaillist />
        </div>
    );
}

export default App;