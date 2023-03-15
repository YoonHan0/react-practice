import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import './assets/css/App.css';

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

            setEmails(json.data);
        } catch(err) {
            console.log(err.message);
        }
    }

    useEffect(()=>{
        fetchEmaillist();
    }, []);

    

    /** 검색 안 됨 newEmails의 값이 변하는데 emails를 state로 내려줘서 안 됨 */
    const notifyKeyWorldChanged = function(text) {

        const newEmailsList = emails.filter(function(el) { 
             return el.firstName.includes(text) || el.lastName.includes(text) || el.email.includes(text);
         });
         newEmailsList.length === 0 ? setNewEmails(emails) : setNewEmails(newEmailsList);
    }

    const addFromHandler = async (firstName, lastName, email) => {
        console.log(`이름: ${firstName} ${lastName}, 이메일: ${email}`);
        const info = {
            'no': null,
            'firstName': firstName,
            'lastName': lastName,
            'email': email
        }

        try {
            const response = await fetch('/api/add', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            console.log(json);
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

        } catch(err) {
            console.log(err.message);
        } 
        setEmails([...emails, info]);
        
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
                emails={emails}
                callbackRemoveListHandler={removeListHandler}/>
        </div>
    );
}

export default App;