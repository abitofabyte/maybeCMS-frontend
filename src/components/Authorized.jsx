import PropTypes from "prop-types"
import { useAuth } from "../context/AuthProvider.jsx"

function Authorized({ roles, children }) {
	const { user } = useAuth()

	if (!user.authorities.some((role) => roles.includes(role))) {
		return ""
	}

	return children
}

Authorized.propTypes = {
	roles: PropTypes.array.isRequired,
	children: PropTypes.node.isRequired,
}

export default Authorized
