import React from 'react'
import styled from './assets/css/RegisterForm.css';

const RegisterForm = ({callbackAddFromHandler}) => {



  return (
    <div>
        <form
            name='addForm'
            className={styled.RegisterForm}
            onSubmit={(e) => {
              e.preventDefault();
              // console.log(e.target.elements.firstName.value);
              callbackAddFromHandler(
                  e.target.elements.firstName.value, 
                  e.target.elements.lastName.value, 
                  e.target.elements.email.value);

              e.target.elements.firstName.value = '';
              e.target.elements.lastName.value = '';
              e.target.elements.email.value = '';
            }} >
            <input type='text' name='firstName' placeholder='성' className={styled.InputFirstName} />
            <input type='text' name='lastName' placeholder='이름' className={styled.InputLastName} />
            <input type='text' name='email' placeholder='이메일' className={styled.InputEmail} />
            <input type='submit' value='등록' />
        </form>
    </div>
  )
}

export default RegisterForm