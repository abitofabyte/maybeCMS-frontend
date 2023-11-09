// import "../App.scss"
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header.jsx"
import { Container, Stack } from "react-bootstrap"
import { Navigation } from "../components/Navigation.jsx"
import { DataProvider } from "../context/DataProvider.jsx"
import { Disclaimer } from "../components/Disclaimer.jsx"

function Root() {
	return (
		<DataProvider>
			<Stack
				className="p-5 align-items-center justify-content-center"
				gap="4">
				<Header />
				<Navigation />
				<Container />
				<Outlet />
			</Stack>
		</DataProvider>
	)
}

export default Root
