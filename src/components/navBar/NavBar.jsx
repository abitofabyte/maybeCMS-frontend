import UserCard from "../userCard/UserCard.jsx";
import style from "./navBar.module.css"
import PropTypes from "prop-types";
import {useLoaderData} from "react-router-dom";

function NavBar({title}) {
    const categories = useLoaderData()

    return (
        <nav className={style.nav}>
            <div className={style.navBar}>
                <div className={style.title}>{title}</div>
                <UserCard image={"http://picsum.photos/100/100"} alt={""}/>
            </div>
            <div className={style.navBar}>
                {categories.map(category => <button key={category.id}>{category.name}</button>)}
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    title: PropTypes.string
}

export default NavBar