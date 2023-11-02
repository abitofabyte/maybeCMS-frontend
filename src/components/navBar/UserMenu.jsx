import { useState } from "react"
import PropTypes from "prop-types"
import { Image } from "react-bootstrap"
import style from "./UserMenu.module.css"
import { useStoreContext } from "../../Store/StoreContext.jsx"
import UserOffcanvas from "./UserOffcanvas.jsx"

function UserMenu({ user }) {
	const { logout } = useStoreContext()
	const [show, setShow] = useState(false)
	const { handle, email, profilePicture } = user

	const toggleUserMenu = () => setShow((old) => !old)
	const handleLogout = () => logout()

	return (
		<>
			<Image
				className={style.avatar}
				src={profilePicture}
				alt={handle}
				roundedCircle
				fluid
				onClick={toggleUserMenu}
			/>
			<UserOffcanvas
				show={show}
				onHide={toggleUserMenu}
				src={profilePicture}
				alt={handle}
				email={email}
				onClick={handleLogout}
			/>
		</>
	)
}

UserMenu.propTypes = {
	user: PropTypes.object.isRequired,
}

export default UserMenu
