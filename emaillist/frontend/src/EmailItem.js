import React from 'react'
import styles from './assets/scss/Email.scss';

const EmailItem = (
    {
        no, 
        firstName, 
        lastName, 
        email, 
        callbackRemoveListHandler}) => {
    // console.log(no, firstName, lastName, email);

    return (
        <li className={styles.Email} key={no}>
            <h4>{`${firstName} ${lastName}`}</h4>
            <span>{email}</span>
            <a 
                href=''
                onClick={(e) => {
                    e.preventDefault();
                    // console.log(no);
                    callbackRemoveListHandler(no);
                }}></a>
        </li>
    )
}

export default EmailItem