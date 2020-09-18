import  React from 'react';
import {Link} from 'react-router-dom';
import './Login.scss';

function Login(){
	return(
		<div className="login__container">
			<div className="flex__login">
				<div className="logo">
					<Link to="/">
						<span className="logo__img"></span>
						<span className="in__logo"></span>
					</Link>
				</div>
				<div className="login-content">
					<h2>Login</h2>
					<h6>Email or mobile phone number</h6>
					<input type="text" />
				</div>
				<div className="login_divider">
					<h5>New to Amazon?</h5>
				</div>
				<div className="signup_btn">
					<button>Create your amazon account</button>
				</div>
			</div>
		</div>
	)
}

export default Login;