import React from 'react'

export default function Login() {
    return (
        <div>
            <h1>FOOT LOCKER</h1>
            <h1>SIGN UP</h1>
            <div className='userDataInput'>
            <form action="/hi">
            <input type="text" name="FirstName" id="" placeholder="First Name"/>
            <input type="text" name="LastName" id="" placeholder="Last Name"/>
            <input type="text" name="Email" id="" placeholder="Email"/>
            <input type="text" name="Username" id="" placeholder="Username"/>
            <input type="text" name="Password" id="" placeholder="Password"/>
             <button>SIGNUP</button>
            </form>
            </div>
        </div>
    )
}
