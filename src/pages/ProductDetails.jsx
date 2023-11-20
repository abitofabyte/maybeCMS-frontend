import { useData } from "../context/DataProvider.jsx"
import LoadingPage from "./LoadingPage.jsx"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Badge, Button, Carousel, Container, Image, Stack } from "react-bootstrap"
import PropTypes from "prop-types"
import style from "./ProductDetails.module.css"
import { config } from "../config.js"
import { AiOutlineArrowRight } from "react-icons/ai"
import { BiRightArrow } from "react-icons/bi"

export function ProductDetails() {
	const product = useParams()
	const { products, getProduct } = useData()

	useEffect(() => {
		getProduct(product.name)
	}, [])

	if (products === null || products?.content) return <LoadingPage />

	const { name, description, tags, price, vat, discount, seller, images, createdAt } = products

	return (
		<Container>
			<Stack gap="2">
				<ImageCarousel images={images} />
				<Stack
					direction="horizontal"
					gap="2">
					{tags.map((tag) => (
						<Badge
							key={tag.id}
							bg="secondary"
							className="px-3 py-2">
							{tag.name}
						</Badge>
					))}
				</Stack>
				<Stack
					direction="horizontal"
					gap="2">
					<h1 className="me-auto">{name}</h1>
					Add to cart:
					<Button variant="outline-secondary">
						<Stack
							direction="horizontal"
							gap="2">
							{discount.percentage > 0 && (
								<Badge bg="success">
									{discount.name} -{discount.percentage * 100}%
								</Badge>
							)}
							{`${price.toFixed(2)}${config.store.currencySymbol}`}
						</Stack>
					</Button>
				</Stack>
				<div>{description.replace("/n", "<br />")}</div>
				<div>{price}</div>
				<div>{vat.name + " " + vat.amount * 100 + "%"}</div>
				<div>{discount.name + " " + discount.percentage * 100 + "%"}</div>
				<div>{seller.name}</div>
				<div>{createdAt}</div>
			</Stack>
		</Container>
	)
}

ImageCarousel.propTypes = {
	images: PropTypes.array.isRequired,
}

function ImageCarousel({ images }) {
	return (
		<Carousel
			className={style.textShadow}
			nex
			fade>
			{images.map((image, i) => (
				<Carousel.Item
					className={style.carousel}
					key={i}>
					<Image
						className="d-block w-100"
						src={image}
						alt="uga"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	)
}
