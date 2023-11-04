import { useLoaderData } from "react-router-dom"

import { Button, Pagination, Stack, Table } from "react-bootstrap"

function ProductAdminPage() {
	const data = useLoaderData()
	if (!data) return ""

	const products = data.content
	const pageNumber = data.pageable.pageNumber
	const totalPages = data.totalPages

	function createPageNumbers(from, to) {
		return Array.from(Array(to - from), (_, i) => from + i)
	}

	return (
		<Stack className="p-4">
			<Table
				striped
				bordered
				hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Category</th>
						<th>Price</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => {
						return (
							<tr
								key={product.id}
								className="align-middle">
								<td>{product.id.substring(0, 4)}</td>
								<td>{product.name}</td>
								<td>{product.category.name}</td>
								<td>{product.price.toFixed(2)}€</td>
								<td>
									<Stack
										direction="horizontal"
										gap="2">
										<Button>Details</Button>
										<Button variant="danger">Delete</Button>
									</Stack>
								</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
			{totalPages > 1 && (
				<Pagination>
					<Pagination.First active={pageNumber > 0} />
					<Pagination.Prev active={pageNumber > 0} />
					{createPageNumbers(0, totalPages).map((page, i) => {
						return (
							<Pagination.Item
								key={i}
								active={i === pageNumber}
								onClick={() => console.log(i)}>
								{i}
							</Pagination.Item>
						)
					})}
					<Pagination.Next active={pageNumber < totalPages} />
					<Pagination.Last active={pageNumber < totalPages} />
				</Pagination>
			)}
		</Stack>
	)
}

export default ProductAdminPage
