import React, { useState } from 'react'
import '../css/SignIn.css'
import { actionLogIn } from '../action/UserAction'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignIn() {

	const dispatch = useDispatch()
	const navigate = useNavigate();

	const [handlerError, setHandlerError] = useState("")

	function handleSubmit(e) {
		e.preventDefault()
		const email = document.getElementById("username").value
		const password = document.getElementById("password").value
		const data = {
			email: email,
			password: password
		}
		dispatch(actionLogIn(data)).then((res) => {
			navigate("/user");
		}).catch((err) => {
			setHandlerError(err.response.data.message)
		})
	}

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<p className='text_error'>{handlerError}</p>
				<form>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" />
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button onClick={handleSubmit} className="sign-in-button" >Sign In</button>
				</form>
			</section>
		</main>
	)
}

export default SignIn