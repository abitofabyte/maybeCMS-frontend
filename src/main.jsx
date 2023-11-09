import ReactDOM from "react-dom/client"
import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import MaybeCMS from "./MaybeCMS.jsx"

const container = document.querySelector("#root")

ReactDOM.createRoot(container).render(<MaybeCMS />)
