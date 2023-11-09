import PropTypes from "prop-types"
import { useLocalStorage } from "../hooks/useLocalStorage.jsx"
import { createContext, useContext, useEffect, useMemo } from "react"
import { Buffer } from "buffer"
import { config } from "../config.js"

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

const AuthContext = createContext()

async function fetchUserData(headers) {
	return await fetch(config.routing.endpoints.login, { headers }).then((res) => res.json())
}

export function AuthProvider({ children }) {
	const [user, setUser] = useLocalStorage("user", null)

	const login = async (email, password) => {
		console.log(email, password)
		const authData = Buffer.from(email + ":" + password).toString("base64")
		const userData = await fetchUserData({
			Authorization: "Basic " + authData,
		})
		if (!userData.error) {
			setUser(userData)
			return true
		}
		return false
	}
	const logout = () => setUser(null)

	useEffect(() => {
		const tryLogin = async (token) => {
			try {
				const userData = await fetchUserData({
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				})
				if (!userData.error) {
					setUser(userData)
				}
			} catch (ex) {
				console.log("Error: " + ex + "\nThe token probably is expired?!")
			}
		}
		if (user) {
			tryLogin(user.token)
		}
	}, [])

	const loginHandler = useMemo(
		() => ({
			user,
			login,
			logout,
		}),
		[user]
	)

	return <AuthContext.Provider value={loginHandler}>{children}</AuthContext.Provider>
}

export function useAuth() {
	return useContext(AuthContext)
}
