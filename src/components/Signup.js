import React, { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Signup.scss'
import { useStateValue } from '../StateProvider.js'
import Validation from '../validation'
import { checkExistedUserName, initialState} from '../reducer'

function Signup() {
    const history = useHistory();
    const [{user},dispatch] = useStateValue()
    const [name,setName] = useState('')
    const [mobile,setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [email,setEmail] = useState('')
    const userFullName = useRef(null)
    const mobileNumber = useRef(null)
    const emailID = useRef(null)
    const userPassword = useRef(null)
    let [enteredName,setEnteredName] = useState({})
    let [enteredEmail,setEnteredEmail] = useState({})
    let [enteredMobile,setEnteredMobile] = useState({})
    let [enteredPassword,setEnteredPassword] = useState({})
    
    const addUser = async(e)=>{
        e.preventDefault()
        setEnteredName(Validation.checkFullName(userFullName))
        setEnteredEmail(Validation.checkEmail(emailID))
        setEnteredMobile(Validation.checkMobileNumber(mobileNumber))
        setEnteredPassword(Validation.checkPassword(userPassword))
        if( Validation.checkFullName(userFullName).isValid 
            && 
            Validation.checkEmail(emailID).isValidEmail 
            && 
            Validation.checkPassword(userPassword).isValidPassword 
            && 
            Validation.checkMobileNumber(mobileNumber).isValidMobile
            ){
            dispatch({
                type: "ADD_USER",
                user: {
                    name: name,
                    mobile: mobile,
                    email: email,
                    password: password,
                }
            })
            console.log({
                name: name,
                mobile: mobile,
                email: email,
                password: password,
            })
            initialState.user.push(
                {
                    name: name,
                    mobile: mobile,
                    email: email,
                    password: password,
                }
            )
            // history.push('/login')
        }
    }

    return (
        <div className="signUp">
            <div className="signUp__content">
                <div className="signUp__logo">
                    <h2>Register Now</h2>
                </div>
                <div className="signUp__formFields">
                    <form onSubmit={addUser}>
                        <div className="signUp__formField">
                            <label>Your Name</label>
                            <input type="text" value={name} ref={userFullName} onChange={(e)=>{setEnteredName({});setName(e.target.value)}}/>
                            {!enteredName.isValid && <p className="error">{enteredName.message}</p>}
                        </div>
                        <div className="signUp__formField">
                            <label>Mobile number</label>
                            <input type="number" value={mobile} ref={mobileNumber} onChange={(e)=>{setEnteredMobile({});setNumber(e.target.value)}}/>
                            {!enteredMobile.isValidMobile && <p className="error">{enteredMobile.message}</p>}
                        </div>
                        <div className="signUp__formField">
                            <label>Email</label>
                            <input type="email" value={email} ref={emailID} onChange={(e)=>{setEnteredEmail({});setEmail(e.target.value)}}/>
                            {!enteredEmail.isValidEmail && <p className="error">{enteredEmail.message}</p>}
                        </div>
                        <div className="signUp__formField">
                            <label>Password</label>
                            <input type="password" value={password} ref={userPassword} onChange={(e)=>{setEnteredPassword({});setPassword(e.target.value)}}/>
                            {!enteredPassword.isValidPassword && <p className="error">{enteredPassword.message}</p>}
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
