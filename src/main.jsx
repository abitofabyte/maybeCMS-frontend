import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./routing/Router.jsx"
import LoadingPage from "./pages/loading/LoadingPage.jsx"

const container = document.querySelector("#root")

ReactDOM.createRoot(container).render(
	<RouterProvider
		router={router}
		fallbackElement={<LoadingPage />}
	/>
)
