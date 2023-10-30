import PropTypes from "prop-types"

import style from "./userCard.module.css"

function UserCard({user}) {

    const {profilePicture, handle} = user;

    return (
        <div className={style.card}>
            <img className={style.image}
                 src={profilePicture}
                 alt={"Profile Picture of " + handle}
            />
        </div>
    )
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserCard
