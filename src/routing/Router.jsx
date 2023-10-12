import {createBrowserRouter} from "react-router-dom"
import ProductPage from "../pages/products/ProductPage.jsx"
import MainPage from "../pages/MainPage.jsx"
import ProductAdminPage from "../pages/products/admin/ProductAdminPage.jsx";
import config from "../Config.js";
import ErrorPage from "./errorPage/ErrorPage.jsx";

async function fetchData() {
	const [products, categories] = await Promise.all([
		fetch(config.routing.backend + "products").then(res => res.json()),
		fetch(config.routing.backend + "categories").then(res => res.json())
	])

	return {products, categories}
}
async function fetchCategories() {
	return fetch(config.routing.backend + "categories")
}

const router = createBrowserRouter([
	{
		id: "root",
		Component: MainPage,
		path: "/",
		children: [
			{
				Component: ProductPage,
				path: "/products",
				loader: fetchData
			},
			{
				Component: ProductAdminPage,
				path: "/products/admin",
				loader: fetchData
			}
		],
		loader: fetchCategories,
		errorElement: ErrorPage
	}
])

export default router
