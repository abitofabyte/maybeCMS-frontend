import PropTypes from "prop-types";
import {useStoreContext} from "../../Store/StoreContext.jsx";

function Authorized({roles, children}) {
    const { user } = useStoreContext()

    if(!user.authorities.some(role => roles.includes(role))) {
        return ""
    }

    return children
}

Authorized.propTypes = {
    roles: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired
}

export default Authorized