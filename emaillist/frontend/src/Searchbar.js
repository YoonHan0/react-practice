import React, { useState } from 'react'
import styles from './assets/css/Searchbar.css';

const Searchbar = ({notifyKeyWorldChanged}) => {
  
  const [data, setdata] = useState("");
  // const textChangeHandler = function(e) {
  //   setText(e.currentTarget.value);
  //   notifyKeyWorldChanged(text);
  // }

  return (
    <div className={styles.Searchbar}>
        <input 
          type='text' 
          placeholder='찾기'
          onChange={e => {
            // console.log(e.target.value);
            setdata(e.currentTarget.value);
            notifyKeyWorldChanged(data);
          }} />
    </div>
  )
}

export default Searchbar