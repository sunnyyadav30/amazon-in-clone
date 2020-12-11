import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.scss'
import { useStateValue } from '../StateProvider.js'

function Signup() {
    const [{user},dispatch] = useStateValue()
    const [name,setName] = useState('')
    const [mobile,setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [email,setEmail] = useState('')

    let isValid = ()=>{
        if(name.length > 3){
            return true
        }
        else{
            console.log('name should be > 3')
            return false
        }
        if(mobile.length == 10){
            return true
        }
        else{
            console.log('invalid mobile')
            return false
        }
        if(password.length > 5){
            return true
        }
        else{
            console.log('invalid password')
            return false
        }
    }
    const addUser = (e)=>{
        e.preventDefault()
        console.log(name,mobile,password,email)
        console.log(isValid)
        if(isValid()){
            dispatch({
                type: "ADD_USER",
                user: {
                    name: name,
                    mobile: mobile,
                    email: email,
                    password: password,
                }
            })
        }
    }
    return (
        <div className="signUp">
            <div className="signUp__content">
                <div className="signUp__logo">
                    <img className="logo__img" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
                </div>
                <div className="signUp__formFields">
                    <h2>Create Account</h2>
                    <form onSubmit={addUser}>
                        <div className="signUp__formField">
                            <label>Your Name</label>
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
                        </div>
                        <div className="signUp__formField">
                            <label>Mobile number</label>
                            <input type="number" value={mobile} onChange={(e)=>setNumber(e.target.value)} required/>
                        </div>
                        <div className="signUp__formField">
                            <label>Email (optional)</label>
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="signUp__formField">
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        <div className="signUp__formField">
                            <button type="submit">Continue</button>
                        </div>
                    </form>
                    <div className="signUp__formField">
                        <p>
                            Already have an account?
                            <Link to="/login">Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
