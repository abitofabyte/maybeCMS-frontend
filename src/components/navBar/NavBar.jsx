import style from "./navBar.module.css"
import PropTypes from "prop-types";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import LoginButton from "./LoginButton.jsx";
import {useStoreContext} from "../../Store/StoreContext.jsx";
import UserMenu from "./UserMenu.jsx";


function NavBar({title}) {
    const categories = useLoaderData()
    const {user} = useStoreContext()
    const {id} = useParams()
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null)

    function onSelectionClick(category) {
        if (selected === category) {
            setSelected(null)
            navigate("/")

        } else {
            setSelected(category)
            navigate("category/" + category.id)
        }
    }

    function onHomeLinkClick() {
        setSelected(null)
        navigate("/")
    }

    useEffect(() => {
        setSelected(categories.find(c => c.id === id))
    }, [])

    return (
        <nav className={style.nav}>
            <div className={style.navBar}>
                <div className="h1" onClick={onHomeLinkClick}>(╯°□°)╯︵ ┻━┻ {title}</div>
                {user ? <UserMenu user={user}/> : <LoginButton/>}
            </div>
            <div className={style.buttons}>
                {categories.map(category => <button
                    className={selected === category ? style.selected : undefined}
                    key={category.id}
                    onClick={() => onSelectionClick(category)}
                >{category.name}</button>)}
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    title: PropTypes.string
}

export default NavBar