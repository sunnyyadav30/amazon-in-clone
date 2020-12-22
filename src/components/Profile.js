import React, { useRef } from 'react'
import "./Profile.scss";
import Header from './Header'
import {initialState} from '../reducer'

function Profile({name,email,mobile,password}) {
    let passwordEl = useRef()
    let isPasswordVisible = false;
    const togglePassword = (e)=>{
        if(!isPasswordVisible){
            passwordEl.current.type = "text"
            e.target.classList.remove('hide')
            e.target.classList.add('show')
            isPasswordVisible = true
        }
        else{
            passwordEl.current.type = "password"
            e.target.classList.remove('show')
            e.target.classList.add('hide')
            isPasswordVisible = false
        }
    }
    return (
        <div className="profile">
            <Header />
            <div className="profile__details">
                <div className="profile__detail">
                    <div className="profile__formGroup">
                        <p>Full name</p>
                        <input type="text" value={initialState.loggedInUser[0].name} disabled/>
                    </div>
                    <div className="profile__formGroup">
                        <p>Email</p>
                        <input type="text" value={initialState.loggedInUser[0].email} disabled/>
                    </div>
                    <div className="profile__formGroup">
                        <p>Mobile number</p>
                        <input type="text" value={initialState.loggedInUser[0].mobile} disabled/>
                    </div>
                    <div className="profile__formGroup">
                        <p>Password</p>
                        <input type="password" value={initialState.loggedInUser[0].password} disabled ref={passwordEl}/>
                        <span className="toggle_password hide" onClick={togglePassword}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
