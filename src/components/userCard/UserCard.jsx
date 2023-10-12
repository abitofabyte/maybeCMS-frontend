import PropTypes from "prop-types"

import style from "./userCard.module.css"

function UserCard({ image, alt }) {
	return (
		<div className={style.card}>
			<img className={style.image}
				src={image}
				alt={alt}
			></img>
		</div>
	)
}

UserCard.propTypes = {
	image: PropTypes.string.isRequired,
	alt: PropTypes.string
}

export default UserCard
