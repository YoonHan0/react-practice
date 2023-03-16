import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import './assets/css/App.css';

function App(props) {
    const [emails, setEmails] = useState([{}]);
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

    const notifyKeyWorldChanged = async function(text) {
        /* keyword가 있는 리스트 받아옴 사용X */
        const keyWordEmailList = emails.filter(function(el) { 
             return el.firstName.includes(text) || el.lastName.includes(text) || el.email.includes(text);
         });
         try {
            const response = await fetch(`/api/emaillist/${text}`, {
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

    const addFromHandler = async (firstName, lastName, email) => {
        // console.log(`이름: ${firstName} ${lastName}, 이메일: ${email}`);
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
            // console.log(json);
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

            setEmails([...emails, info]);
        } catch(err) {
            console.log(err.message);
        } 
    }

    const removeListHandler = async (no) => {
        // console.log(`넘겨받은 no: ${no}`);
        const list = emails.filter((el) => el.no !== no);
        // console.log(`\n======== list: ${list}`);
        try {
            const response = await fetch(`/api/delete/${no}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            // console.log(json);
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }
            setEmails(list);
        } catch(err) {
            console.log(err.message);
        }
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