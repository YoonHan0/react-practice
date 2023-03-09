import React from 'react'

const EmailItem = ({no, firstName, lastName, email}) => {
    console.log(no, firstName, lastName, email);
    return (
        <li>
            {firstName}{lastName}
            <br />
            {email}
        </li>
    )
}

export default EmailItem