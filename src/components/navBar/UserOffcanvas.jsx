import { Button, Image, Offcanvas, Stack } from "react-bootstrap"
import style from "./UserMenu.module.css"
import Authorized from "../authorization/Authorized.jsx"
import PropTypes from "prop-types"

function UserOffcanvas({ alt, email, onClick, onHide, show, src }) {
	return (
		<Offcanvas
			show={show}
			onHide={onHide}
			placement="end">
			<Offcanvas.Header
				className="border-bottom"
				closeButton>
				<Stack
					direction="horizontal"
					gap="4">
					<Image
						className={style.avatar}
						src={src}
						alt={alt}
						roundedCircle
						fluid
					/>
					<Stack>
						<div className="fw-bold">{alt}</div>
						<div>{email} </div>
					</Stack>
				</Stack>
			</Offcanvas.Header>
			<Offcanvas.Body className="d-flex flex-column">
				<Stack
					direction="vertical"
					gap="1">
					<Button>Shopping Basket</Button>
					<Authorized roles={["SELLER"]}>
						<hr />
						<Button>Manage my Products</Button>
					</Authorized>
					<Authorized roles={["ADMIN"]}>
						<Button>Admin Page</Button>
					</Authorized>
					<hr className="mt-auto" />
					<Button>Settings</Button>
					<Button onClick={onClick}>Logout</Button>
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	)
}

UserOffcanvas.propTypes = {
	show: PropTypes.bool,
	onHide: PropTypes.func,
	src: PropTypes.any,
	alt: PropTypes.any,
	email: PropTypes.any,
	onClick: PropTypes.func,
}

export default UserOffcanvas
