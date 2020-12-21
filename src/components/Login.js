import  React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Login.scss';
import { useStateValue } from '../StateProvider.js'
import { checkCredentials, initialState} from '../reducer'

function Login(){
	const [userName,setUserName] = useState('')
	const [password,setPassword] = useState('')
	const [{user},dispatch] = useStateValue()
	const history = useHistory();
	const [creds,setCreds] = useState({})
	const loginNow = ()=>{
		let loginRes = checkCredentials(userName,password)
		if(loginRes.isAuthenticated){
			setCreds({
				isAuthenticated: true,
				message: ""
			})
			initialState.isAuthenticated = true
			initialState.loggedInUser.length = 0
			initialState.loggedInUser.push(loginRes.loggedInUser)
			history.push('/')
		}
		else{
			setCreds({
				isAuthenticated: false,
				message: "Invalid username or password"
			})
		}
	}
	return(
		<div className="login__container">
			<div className="logo">
				<Link to="/">
					<h2>Shop Now</h2>
				</Link>
			</div>
			<div className="flex__login">
				<div className="login-content">
					<h2>Login</h2>
					{!creds.isAuthenticated && <p>{creds.message}</p>}
					<h6>Email or mobile phone number</h6>
					<input type="text" className="email" value={userName} onChange={(e)=>{creds.isAuthenticated = true;setUserName(e.target.value)}}/>
					<h6>Password</h6>
					<input type="text" type="password" value={password} onChange={(e)=>{creds.isAuthenticated = true;setPassword(e.target.value)}} />
					<button onClick={loginNow}>Continue</button>
				</div>
				<div className="login_divider">
					<h5>New user?</h5>
				</div>
				<div className="signup_btn">
					<Link to="/register">
						<button>Create your account here</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Login;