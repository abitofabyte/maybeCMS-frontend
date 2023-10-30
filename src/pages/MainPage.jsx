// import "../App.scss"
import NavBar from "../components/navBar/NavBar.jsx"
import {Outlet} from "react-router-dom";
import config from "../Config.js";

function MainPage() {
    return (
        <>
            <NavBar title={config.page.title}/>
            <Outlet/>
        </>
    )
}

export default MainPage
