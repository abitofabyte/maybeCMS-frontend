import PropTypes from "prop-types"
import { useLoaderData, useNavigate } from "react-router-dom"
import LoginButton from "../login/LoginButton.jsx"
import { useStoreContext } from "../../Store/StoreContext.jsx"
import UserMenu from "./UserMenu.jsx"
import { Button, ButtonGroup, Nav, Navbar, Stack } from "react-bootstrap"
import config from "../../Config.js"
import { useState } from "react"

function Navigation({ title }) {
	const [currentCategory, setCurrentCategory] = useState(null)
	const navigate = useNavigate()
	const categories = useLoaderData()
	const { user } = useStoreContext()

	function handleCategorySelect(category) {
		if (category !== currentCategory) {
			setCurrentCategory(category)
			navigate(config.routing.frontend.productByCategoryPage + "/" + category.id)
		} else {
			setCurrentCategory(null)
			navigate("/")
		}
	}

	function handleClearCategory() {
		setCurrentCategory(null)
		navigate(config.routing.frontend.productPage)
	}

	return (
		<Navbar
			expand="md"
			sticky="top"
			className="px-4 py-2 bg-body-secondary">
			{/*<Container>*/}
			<Stack
				direction={"vertical"}
				gap="2">
				<Stack direction="horizontal">
					<Navbar.Brand href="/">(╯°□°)╯︵ ┻━┻ {title}</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">{user ? <UserMenu user={user} /> : <LoginButton />}</Nav>
					</Navbar.Collapse>
				</Stack>
				<Stack>
					<ButtonGroup>
						{categories.map((category) => (
							<Button
								key={category.id}
								onClick={() => handleCategorySelect(category)}
								active={category === currentCategory}>
								{category.name}
							</Button>
						))}
					</ButtonGroup>
				</Stack>
			</Stack>
		</Navbar>
	)
}

Navigation.propTypes = {
	title: PropTypes.string,
}

export default Navigation
