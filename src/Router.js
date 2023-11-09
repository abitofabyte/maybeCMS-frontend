import { createBrowserRouter } from "react-router-dom"
import Root from "./pages/Root.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import { config } from "./config.js"
import { LandingPage } from "./pages/LandingPage.jsx"
import { ProductList } from "./pages/ProductList.jsx"
import { LoginPage } from "./pages/LoginPage.jsx"
import { ProductDetails } from "./pages/ProductDetails.jsx"

const { pages } = config.routing

function createTagParams(tags) {
	if (tags.length === 0) return ""
	return `?${tags}`
}

export const useRoute = {
	home: () => "/",
	categories: (category, ...tags) => (category !== null ? `/category/${category}${createTagParams(tags)}` : `/`),
	product: (product) => `/product/${product}`,
}

export const router = createBrowserRouter([
	{
		id: "root",
		Component: Root,
		ErrorBoundary: ErrorPage,
		children: [
			{
				Component: LandingPage,
				path: pages.landingPage,
			},
			{
				Component: ProductList,
				path: pages.category,
			},
			{
				Component: ProductDetails,
				path: pages.details,
			},
			{
				Component: LoginPage,
				path: pages.login,
			},
		],
	},
])
