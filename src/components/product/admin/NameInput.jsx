import config from "../../../Config.js";
import style from "./ProductTableEntry.module.css";
import PropTypes from "prop-types";

function NameInput({product}) {
    function onNameFocusLost(newName) {
        product.name = newName;

        const options = {
            method: "PATCH",
            headers: {"content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(product)
        }

        fetch(config.routing.backend + "products", options)
    }

    return (
        <td>
            <input id={"name" + product.id}
                   className={style.name}
                   type={"text"}
                   defaultValue={product.name}
                   onBlur={(e) => onNameFocusLost(e.target.value)}/>
        </td>
    )
}

NameInput.propTypes = {
    product: PropTypes.object.isRequired
}

export default NameInput