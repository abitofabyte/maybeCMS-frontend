import ReactDOM from "react-dom/client"
import "./App.scss"
import { RouterProvider } from "react-router-dom"
import router from "./routing/Router.jsx"
import LoadingPage from "./pages/loading/LoadingPage.jsx"
import Application from "./Application.jsx"
import "bootstrap/dist/css/bootstrap.min.css"

const container = document.querySelector("#root")

ReactDOM.createRoot(container).render(<Application />)
