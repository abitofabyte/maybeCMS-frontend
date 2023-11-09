import { config } from "../config.js"

const { endpoints } = config.routing

const getTransactionBuilder = (user) => ({
	categories: {
		get: () => createTransaction(endpoints.categories),
		post: (body) => createTransaction(endpoints.categories, user, "POST", body),
		patch: (body) => createTransaction(endpoints.categories, user, "PATCH", body),
		delete: () => createTransaction(endpoints.categories, user, "DELETE"),
	},
	discounts: {
		get: () => createTransaction(endpoints.discounts),
		post: (body) => createTransaction(endpoints.discounts, user, "POST", body),
		patch: (body) => createTransaction(endpoints.discounts, user, "PATCH", body),
		delete: () => createTransaction(endpoints.discounts, user, "DELETE"),
	},
	products: {
		get: (page) => createTransaction(endpoints.products + "?page=" + page),
		getByCategory: (category, searchParams) => {
			const url = endpoints.products + "/category/" + category + "?" + searchParams
			console.log(url)
			return createTransaction(url)
		},
		getOne: (product) => createTransaction(endpoints.products + "/" + product),
		post: (body) => createTransaction(endpoints.products, user, "POST", body),
		patch: (body) => createTransaction(endpoints.products, user, "PATCH", body),
		delete: () => createTransaction(endpoints.products, user, "DELETE"),
	},
	tags: {
		get: () => createTransaction(endpoints.tags),
		post: (body) => createTransaction(endpoints.tags, user, "POST", body),
		patch: (body) => createTransaction(endpoints.tags, user, "PATCH", body),
		delete: () => createTransaction(endpoints.tags, user, "DELETE"),
	},
	vats: {
		get: () => createTransaction(endpoints.vats),
		post: (body) => createTransaction(endpoints.vats, user, "POST", body),
		patch: (body) => createTransaction(endpoints.vats, user, "PATCH", body),
		delete: () => createTransaction(endpoints.vats, user, "DELETE"),
	},
})

function createHeader(user) {
	return {
		Authorization: "Bearer " + user.token,
		"Content-Type": "application/json",
	}
}

async function createTransaction(path, user = null, method = "GET", body = null) {
	const options = { method }
	user && (options.headers = createHeader(user))
	body && (options.body = body)
	return fetch(path, options)
}

async function handleResponse(response) {
	if (!response.ok) {
		return { message: response.url, status: response.status }
	}
	return response.json()
}

async function handleTransactions(...transactions) {
	const responses = await Promise.all(transactions)
	return await Promise.all(responses.map(handleResponse))
}

export { getTransactionBuilder, handleTransactions }
