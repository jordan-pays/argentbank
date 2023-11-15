import React from 'react'
import '../css/Header.css'
import logo from "../assets/argentBankLogo.png"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actionLogOut } from '../action/UserAction'


function Header() {
	const { firstName } = useSelector((state) => state.user)
	const dispatch = useDispatch()

	function logOut() {
		dispatch(actionLogOut())
	}

	return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img
					className="main-nav-logo-image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
					<div>
						{firstName ?
							<>
								<Link className="main-nav-item" to="/user">
									<i className="fa fa-user-circle"></i>
									{firstName}
								</Link>
								<Link className="main-nav-item" to="/" onClick={logOut}>
									<i className="fa fa-sign-out"></i>
									Sign Out
								</Link>
					</>
					:
					<Link className="main-nav-item" to="/sign-in"><i className="fa fa-user-circle"></i> Sign In</Link>
				}
			</div>
		</nav>
	)
}

export default Header