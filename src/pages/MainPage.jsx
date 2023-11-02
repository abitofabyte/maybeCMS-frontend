// import "../App.scss"
import Navigation from "../components/navBar/Navigation.jsx"
import { Outlet } from "react-router-dom"
import config from "../Config.js"

function MainPage() {
	return (
		<>
			<Navigation title={config.page.title} />
			<Outlet />
		</>
	)
}

export default MainPage
