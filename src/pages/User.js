import React, { useEffect, useState } from 'react'
import AccountItem from '../components/AccountItem'
import '../css/User.css'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionUpdate } from '../action/UserAction';

function User() {
	const dispatch = useDispatch()

	const { id, lastName, firstName } = useSelector((state) => state.user)
	const navigate = useNavigate()
	const [edit, setEdit] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		const firstName = document.getElementById("firstName").value
		const lastName = document.getElementById("lastName").value
		const data = {
			firstName: firstName,
			lastName: lastName
		}
		dispatch(actionUpdate(data)).then(() => {
			setEdit(false)
		})
	}

	useEffect(() => {
		if (id == "") {
			navigate("/sign-in")
		}
	}, [])


	return (
		<main class="main bg-dark">
			<div class="header">
				{
					edit ?
						<form className='col'>
							<h1>Welcome back</h1>
							<div className='row'>
								<div className='input-wrapper'>
									<input type='text' placeholder={firstName} id='firstName' required />
								</div>
								<div className='input-wrapper'>
									<input type='text' placeholder={lastName} id='lastName' required />
								</div>
							</div>
							<div className='row'>
								<button type="submit" onClick={handleSubmit} class="edit-button">Save</button>
								<button type="button" class="edit-button cancel-button" onClick={() => setEdit(false)}>Cancel</button>
							</div>
						</form>
						:
						<>
							<h1>Welcome back<br />{firstName} {lastName}!</h1>
							<button onClick={() => setEdit(true)} class="edit-button">Edit Name</button>
						</>
				}

			</div>
			<h2 class="sr-only">Accounts</h2>
			<AccountItem
				title={"Argent Bank Checking (x8349)"}
				amount={"2,082.79"}
				description={"Available Balance"}
			/>
			<AccountItem
				title={"Argent Bank Savings (x6712)"}
				amount={"10,928.42"}
				description={"Available Balance"}
			/>
			<AccountItem
				title={"Argent Bank Credit Card (x8349)"}
				amount={"184.30"}
				description={"Current Balance"}
			/>
		</main>
	)
}

export default User