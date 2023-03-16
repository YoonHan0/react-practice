import React from 'react'
import EmailItem from './EmailItem';
import styles from './assets/css/Emaillist.css';

const EmailList = ({emails, callbackRemoveListHandler}) => {
    console.log(emails);
    return (
        <ul className={styles.Emaillist}>
            
            {
                emails.map(data => <EmailItem
                                        no={data.no}
                                        firstName={data.firstName}
                                        lastName={data.lastName}
                                        email={data.email}
                                        callbackRemoveListHandler={callbackRemoveListHandler} />)
            }
        </ul>
  )
}

export default EmailList