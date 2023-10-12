import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./routing/Router.jsx"
import Loading from "./components/Loading.jsx"

const container = document.querySelector("#root")

ReactDOM.createRoot(container).render(
	<RouterProvider
		router={router}
		fallbackElement={<Loading />}
	/>
)
