import UserCard from "../userCard/UserCard.jsx";
import style from "./navBar.module.css"
import PropTypes from "prop-types";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function NavBar({title}) {
    const categories = useLoaderData()
    const { id } = useParams()
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null)

    function onSelectionClick(category) {
        if(selected === category) {
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
        <div className={style.nav}>
            <div className={style.navBar}>
                <div className={style.title} onClick={onHomeLinkClick}>{title}</div>
                <UserCard image={"http://picsum.photos/100/100"} alt={""}/>
            </div>
            <div className={style.buttons}>
                {categories.map(category => <button
                    className={selected === category ? style.selected : undefined }
                    key={category.id}
                    onClick={() => onSelectionClick(category)}
                >{category.name}</button>)}
            </div>
        </div>
    )
}

NavBar.propTypes = {
    title: PropTypes.string
}

export default NavBar