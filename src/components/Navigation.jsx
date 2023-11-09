import { Button, ButtonGroup, Col, Container, Form, Row } from "react-bootstrap"
import { useData } from "../context/DataProvider.jsx"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useRoute } from "../Router.js"
import Select from "react-select"
import { UserMenu } from "./UserMenu.jsx"

export function Navigation() {
	const { categories, tags } = useData()
	const navigate = useNavigate()
	const path = useParams()

	const [searchParams, setSearchParams] = useSearchParams()
	const options = tags?.map((tag) => ({
		value: tag.id,
		label: tag.name,
	}))

	function onHome() {
		navigate(useRoute.home())
	}

	function onSelectedCategoryChange(category) {
		searchParams.set("page", 0)
		navigate(useRoute.categories(category?.name ?? null, searchParams))
	}

	function onSearchTermChange(event) {
		console.log(event.target.value)
	}

	function onSelectedTagsChange(selectedTags) {
		setSearchParams(selectedTags.length > 0 ? { tags: selectedTags.map((tag) => tag.label).join(",") } : {})
	}

	return (
		<Container className="p-2 sticky-top bg-white">
			<Form id="navigation">
				<Row>
					<Col>
						<ButtonGroup className="flex-grow-1">
							<Button
								variant="outline-secondary"
								active={!path.name}
								onClick={onHome}>
								Home
							</Button>
							{categories?.map((category) => (
								<Button
									variant="outline-secondary"
									key={category.id}
									active={category.name === path.name}
									onClick={() => onSelectedCategoryChange(category)}>
									{category.name}
								</Button>
							))}
						</ButtonGroup>
					</Col>
					{path.name && path.name !== "product" && (
						<>
							<Col>
								<Form.Control
									id="searchTerm"
									type="text"
									placeholder="Search ..."
									onChange={onSearchTermChange}
								/>
							</Col>
							<Col>
								<Select
									id="tagSelection"
									placeholder="Select Tags"
									options={options}
									onChange={onSelectedTagsChange}
									isMulti
								/>
							</Col>
						</>
					)}
					<Col className="d-flex justify-content-end">
						<UserMenu />
					</Col>
				</Row>
			</Form>
		</Container>
	)
}
