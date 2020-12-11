import  React from 'react';
import {Link} from 'react-router-dom';
import './Login.scss';

function Login(){
	return(
		<div className="login__container">
			<div className="logo">
				<Link to="/">
					<img className="logo__img" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
				</Link>
			</div>
			<div className="flex__login">
				<div className="login-content">
					<h2>Login</h2>
					<h6>Email or mobile phone number</h6>
					<input type="text" />
					<Link to="/">
						<button>Continue</button>
					</Link>
				</div>
				<div className="login_divider">
					<h5>New to Amazon?</h5>
				</div>
				<div className="signup_btn">
					<Link to="/register">
						<button>Create your amazon account</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Login;