import ReactDOM from "react-dom/client"
import "./App.scss"
import {RouterProvider} from "react-router-dom"
import router from "./routing/Router.jsx"
import LoadingPage from "./pages/loading/LoadingPage.jsx"
import StoreContextProvider from "./Store/StoreContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


const container = document.querySelector("#root")

ReactDOM.createRoot(container).render(
    <StoreContextProvider>
        <RouterProvider
            router={router}
            fallbackElement={<LoadingPage/>}
        />
    </StoreContextProvider>
)
