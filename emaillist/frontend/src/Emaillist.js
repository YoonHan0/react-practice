import React from 'react'
import EmailItem from './EmailItem';
import styles from './assets/css/Emaillist.css';

const EmailList = ({emails}) => {
    console.log(emails);
    return (
        <ul className={styles.Emaillist}>
            
            {
                emails.map(data => <EmailItem
                                    key={data.no}
                                    no={data.no}
                                    firstName={data.firstName}
                                    lastName={data.lastName}
                                    email={data.email}/>)
            }
        </ul>
  )
}

export default EmailList