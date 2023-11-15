import { instance } from "./ConfigService"

function logIn(data) {
	return instance.post("/user/login", data)
}

function getProfil() {
	return instance.post('/user/profile')
}

function updateProfil(data) {
	return instance.put('/user/profile', data)
}

export default { logIn, getProfil, updateProfil }