import { useData } from "../context/DataProvider.jsx"
import LoadingPage from "./LoadingPage.jsx"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Stack } from "react-bootstrap"

export function ProductDetails() {
	const product = useParams()
	const { products, getProduct } = useData()

	console.log(products, product.name)

	useEffect(() => {
		getProduct(product.name)
	}, [])

	if (products === null || products?.content) return <LoadingPage />

	const { name, description, category, tags, price, vat, discount, seller, images, createdAt } = products

	return (
		<Stack>
			<div>{name}</div>
			<div>{description}</div>
			<div>{category.name}</div>
			<div>{tags.map((t) => t.name).join(", ")}</div>
			<div>{price}</div>
			<div>{vat.name + " " + vat.amount * 100 + "%"}</div>
			<div>{discount.name + " " + discount.percentage * 100 + "%"}</div>
			<div>{seller.name}</div>
			<div>{images.join(", ")}</div>
			<div>{createdAt}</div>
		</Stack>
	)
}
