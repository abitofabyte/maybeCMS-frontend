const backend = "http://localhost:9001/"
export const config = {
	routing: {
		endpoints: {
			login: backend + "authenticate",
			register: backend + "register",
			products: backend + "products",
			categories: backend + "categories",
			tags: backend + "tags",
			discounts: backend + "discounts",
			vats: backend + "vats",
		},
		pages: {
			landingPage: "/",
			category: "/category/:name",
			details: "/product/:name",
			manageProduct: "/manage",
			login: "/login",
			signup: "/signup",
		},
	},
	store: {
		currencySymbol: "€",
	},
}
