import PropTypes from "prop-types"

function UserCard({ image, alt }) {
	return (
		<div>
			<img
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
