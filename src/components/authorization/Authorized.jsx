import PropTypes from "prop-types"
import { useApplicationContext } from "../../Application.jsx"

function Authorized({ roles, children }) {
	const { user } = useApplicationContext()

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
