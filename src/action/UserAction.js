import UserService from "../services/UserService";
import { deleteUser, updateUser } from "../stores";

export const actionLogIn = (dataGive) => (dispatch) => {
	return UserService.logIn(dataGive).then(
		async (response) => {
			localStorage.setItem("token", response.data.body.token)
			const profil = await UserService.getProfil()
			dispatch(updateUser(profil.data.body));
			return response;
		}
	)
}

export const actionUpdate = (dataGive) => (dispatch) => {
	return UserService.updateProfil(dataGive).then(()=>{
		dispatch(updateUser(dataGive));
	})
}

export const actionLogOut = () => (dispatch) => {
	localStorage.removeItem("token")
	dispatch(deleteUser(""))
}