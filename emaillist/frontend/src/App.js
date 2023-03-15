import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import './assets/css/App.css';
// import dataList from './assets/json/data.json';

function App(props) {
    const [emails, setEmails] = useState([{}]);
    const [newEmails, setNewEmails] = useState(emails);
    const [list, setList] = useState({
        no: null,
        firstName: '',
        lastName: '',
        email: ''
    });

    const fetchEmaillist = async () => {
        try {
            const response = await fetch('/api/emaillist', {
                method: 'get',      // get방식
                headers: {
                    'Accept': 'application/json'    // application/json방식으로 받을 수 있다
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

            setNewEmails(json.data);
        } catch(err) {
            console.log(err.message);
        }
    }

    useEffect(()=>{
        fetchEmaillist();
    }, []);

    const notifyKeyWorldChanged = function(text) {

        const newEmailsList = emails.filter(function(e) { 
             return e.firstName.includes(text) || e.lastName.includes(text) || e.email.includes(text);
         });
         newEmailsList.length === 0 ? setNewEmails(emails) : setNewEmails(newEmailsList);
    }

    const addFromHandler = (firstName, lastName, email) => {
        console.log(`이름: ${firstName} ${lastName}, 이메일: ${email}`);
        const info = {
            'no': null,
            'firstName': firstName,
            'lastName': lastName,
            'email': email
        }
        // console.log(info);
        // console.log(emails);
        // etList(info);
        setNewEmails([...newEmails, info]);
        
    }

    const removeListHandler = (no) => {
        // console.log(`넘겨받은 no: ${no}`);
        const list = newEmails.filter((el) => el.no !== no);
        setNewEmails(list);
        
    }

    return (
        <div id='App' className={'App'}>
            <RegisterForm callbackAddFromHandler={addFromHandler} />
            <Searchbar notifyKeyWorldChanged={notifyKeyWorldChanged} />
            <Emaillist 
                emails={newEmails}
                callbackRemoveListHandler={removeListHandler}/>
        </div>
    );
}

export default App;