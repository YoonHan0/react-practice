import React from 'react'
import EmailItem from './EmailItem';
import styles from './assets/css/Emaillist.css';
import dataList from './assets/json/data.json';

const EmailList = () => {
    console.log(dataList);
    return (
        <ul className={styles.Emaillist}>
            
            {
                dataList.map(data => <EmailItem
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