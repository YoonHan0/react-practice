import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import './assets/css/App.css';
import dataList from './assets/json/data.json';

function App(props) {
    const [emails, setEmails] = useState(dataList);
    const [newEmails, setNewEmails] = useState(emails);
    const notifyKeyWorldChanged = function(text) {
        // console.log(text);
        /* firstName or lastName or email에 있으면 다 출력 */
        const newEmailsList = emails.filter(function(e) {   // filter: Array안에서 조건이 참이되는 녀석들을 return해줌
            // e: data.json에 있는 모든 값
            // console.log(e.firstName);
             return text.match(e.firstName) || text.match(e.lastName) || text.match(e.email);
         });
         // console.log(newEmailsList);
         text === null ? setNewEmails(emails) : setNewEmails(newEmailsList);
    }

    return (
        <div id='App' className={'App'}>
            <RegisterForm />
            <Searchbar notifyKeyWorldChanged={notifyKeyWorldChanged} />
            <Emaillist emails={newEmails}/>
        </div>
    );
}

export default App;