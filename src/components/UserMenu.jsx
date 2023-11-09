import { useAuth } from "../context/AuthProvider.jsx"
import { Button, ButtonGroup, Container, Image, Offcanvas, Stack } from "react-bootstrap"
import { MdLogin } from "react-icons/md"
import { Link } from "react-router-dom"
import style from "./UserMenu.module.css"
import { useState } from "react"
import Authorized from "./Authorized.jsx"

export function UserMenu() {
	const [show, setShow] = useState(false)
	const { user, logout } = useAuth()

	if (!user)
		return (
			<Link to={"/login"}>
				<Button
					variant="outline-secondary"
					className={`d-flex justify-content-center align-items-center ${style.button}`}>
					<MdLogin />
				</Button>
			</Link>
		)

	function showOffcanvas() {
		setShow(true)
	}
	function hideOffcanvas() {
		setShow(false)
	}

	function handleLogout() {
		hideOffcanvas()
		logout()
	}

	const { profilePicture, handle, email } = user

	return (
		<>
			<Image
				className={style.button}
				onClick={showOffcanvas}
				src={profilePicture}
				alt={handle}
				roundedCircle
			/>
			<Offcanvas
				show={show}
				onHide={hideOffcanvas}
				placement="end">
				<Offcanvas.Header
					className="border-bottom"
					closeButton>
					<Stack direction="horizontal">
						<Image
							className={style.button}
							src={profilePicture}
							alt={handle}
							roundedCircle
						/>
						<Stack>
							<Container className="fw-bold">{handle}</Container>
							<Container>{email}</Container>
						</Stack>
					</Stack>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Stack gap="2">
						<Button>Cart</Button>
						<Button>Profile</Button>
						<Authorized roles={["SELLER", "ADMIN"]}>
							<Button>Manage Products</Button>
						</Authorized>
						<Authorized roles={["ADMIN"]}>
							<Button>Page Settings</Button>
						</Authorized>
						<hr className="justify-self-end" />
						<Button onClick={handleLogout}>Logout</Button>
					</Stack>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	)
}
