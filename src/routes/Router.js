import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import User from '../pages/User';
import Error from '../pages/Error';

function Router() {

	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="sign-in" element={<SignIn />} />
			<Route path="user" element={<User />} />
			<Route path="*" element={<Error />} />
		</Routes>
	)
}

export default Router