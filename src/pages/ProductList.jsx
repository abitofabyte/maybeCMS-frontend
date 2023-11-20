import { useData } from "../context/DataProvider.jsx"
import { Container, Pagination, Stack } from "react-bootstrap"
import { ProductCard } from "../components/ProductCard.jsx"
import LoadingPage from "./LoadingPage.jsx"
import { useParams, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { Disclaimer } from "../components/Disclaimer.jsx"

function createPageNumbers(from, to) {
	return Array.from(Array(to - from), (_, i) => from + i)
}

export function ProductList() {
	const category = useParams()
	const [searchParams, setSearchParams] = useSearchParams()

	const { products, getProductByCategory } = useData()

	const pageNumber = products?.pageable?.pageNumber || searchParams.get("page")
	const totalPages = products?.totalPages
	const lastPage = totalPages - 1

	function handlePageSelect(page) {
		setSearchParams((prev) => {
			prev.set("page", page)
			return prev
		})
		getProductByCategory(category.name, searchParams)
	}

	useEffect(() => {
		getProductByCategory(category.name, searchParams)
	}, [category])

	useEffect(() => {
		getProductByCategory(category.name, searchParams)
	}, [searchParams])

	if (products === null || products.category === null) return <LoadingPage />

	return (
		<Container>
			<Stack
				direction="horizontal"
				className="flex-wrap"
				gap="1">
				{products?.content?.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</Stack>
			{totalPages > 1 && (
				<Stack className="mt-4 align-items-center">
					<Pagination>
						<Pagination.First
							className="btn-secondary-outline"
							disabled={pageNumber <= 0}
							onClick={() => handlePageSelect(0)}
						/>
						<Pagination.Prev
							disabled={pageNumber <= 0}
							onClick={() => handlePageSelect(pageNumber - 1)}
						/>
						{createPageNumbers(0, totalPages).map((page, i) => {
							return (
								<Pagination.Item
									key={i}
									active={i === pageNumber}
									onClick={() => handlePageSelect(i)}>
									{i}
								</Pagination.Item>
							)
						})}
						<Pagination.Next
							disabled={pageNumber >= lastPage}
							onClick={() => handlePageSelect(pageNumber + 1)}
						/>
						<Pagination.Last
							disabled={pageNumber >= lastPage}
							onClick={() => handlePageSelect(totalPages - 1)}
						/>
					</Pagination>
				</Stack>
			)}
			<Disclaimer />
		</Container>
	)
}
