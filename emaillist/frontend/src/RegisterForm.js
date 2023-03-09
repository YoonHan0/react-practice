import React from 'react'
import styled from './assets/css/RegisterForm.css';

const RegisterForm = () => {
  return (
    <div>
        <form className={styled.RegisterForm}>
            <input type='text' name='firstName' placeholder='성' className={styled.InputFirstName} />
            <input type='text' name='lastName' placeholder='이름' className={styled.InputLastName} />
            <input type='text' name='email' placeholder='이메일' className={styled.InputEmail} />
            <input type='submit' value='등록' />
        </form>
    </div>
  )
}

export default RegisterForm