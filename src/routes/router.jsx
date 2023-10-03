import { createBrowserRouter } from "react-router-dom"
import ProductPage from "./ProductPage.jsx"
import App from "../App"

const router = createBrowserRouter([
	{
		element: <App />,
		path: "/"
	},
	{
		element: <ProductPage />,
		path: "/products",
		loader: async () => {
			return fetch("http://localhost:9001/products")
		}
	}
])

export default router
