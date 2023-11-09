import { Badge, Card, Stack } from "react-bootstrap"
import PropTypes from "prop-types"
import style from "./ProductCard.module.css"
import { config } from "../config.js"
import { useNavigate } from "react-router-dom"
import { useRoute } from "../Router.js"

ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
}

export function ProductCard({ product }) {
	const navigate = useNavigate()
	const { images, name, seller, discount, price, tags } = product

	function handleSelectProduct() {
		navigate(useRoute.product(product.name))
	}

	return (
		<Card
			className={style.card}
			onClick={handleSelectProduct}>
			<Card.Img
				src={images[0]}
				alt=""
			/>
			{/*<Card.ImgOverlay>*/}
			<Stack className="justify-content-between h-100">
				<Stack>
					<Card.Title className={style.title}>{name}</Card.Title>
					<Card.Subtitle>by {seller.handle}</Card.Subtitle>
					<hr />
					<Stack direction="horizontal">
						{discount && discount.percentage > 0 && (
							<Badge bg="danger">
								{discount.name} -{discount.percentage * 100}%
							</Badge>
						)}
						<div className="ms-auto">
							{price.toFixed(2)}
							{config.store.currencySymbol}
						</div>
					</Stack>
				</Stack>
				<Stack
					direction="horizontal"
					gap="2">
					{tags.map((tag) => (
						<Badge
							key={tag.id}
							bg="secondary">
							{tag.name}
						</Badge>
					))}
				</Stack>
			</Stack>
			{/*</Card.ImgOverlay>*/}
		</Card>
	)
}
