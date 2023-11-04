import { createContext, useContext, useEffect, useState } from "react"
import config from "./Config.js"
import { Buffer } from "buffer"
import router from "./routing/Router.jsx"
import { RouterProvider } from "react-router-dom"
import LoadingPage from "./pages/loading/LoadingPage.jsx"

const ApplicationContext = createContext(null)

function Application() {
	const [user, setUser] = useState(null)

	async function login(email, password) {
		const auth = Buffer.from(email + ":" + password).toString("base64")
		const headers = {
			Authorization: "Basic " + auth,
			"Content-Type": "application/json",
		}
		const data = await fetch(config.routing.backend.login, { headers }).then((res) => res.json())
		if (data.error) {
			return false
		}
		localStorage.setItem("data", JSON.stringify(data))
		setUser(data)
		return true
	}

	function logout() {
		localStorage.removeItem("data")
		setUser(null)
	}

	async function rememberMe(user) {
		const headers = {
			method: "POST",
			Authorization: "Bearer " + user.token,
			"Content-Type": "application/json",
		}
		const data = await fetch(config.routing.backend.login, { headers }).then((res) => res.json())
		if (data.error) {
			//todo: fix
			console.log(data)
			return
		}
		localStorage.setItem("data", JSON.stringify(data))
		setUser(data)
	}

	useEffect(() => {
		const data = localStorage.getItem("data")
		if (data) {
			rememberMe(JSON.parse(data))
		}
	}, [])

	return (
		<Application.Provider value={{ user, login, logout }}>
			<RouterProvider
				router={router(user)}
				fallbackElement={<LoadingPage />}
			/>
		</Application.Provider>
	)
}

export default Application

export function useApplicationContext() {
	const context = useContext(ApplicationContext)
	if (!context) {
		throw new Error("useStoreContext must be used within a UserContextProvider")
	}
	return context
}
