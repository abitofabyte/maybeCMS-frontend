import config from "../../../Config.js";
import PropTypes from "prop-types";

function CategorySelection({product, categories}) {

    function onValueChanged(newCategory) {

        product.category = categories.find(category => category.id === newCategory);

        const options = {
            method: "PATCH",
            headers: {"content-type": "application/json;charset:UTF-8"},
            body: JSON.stringify(product)
        }

        fetch(config.routing.backend + "products", options)
    }

    return (
        <td>
            <select name="category" id="category" defaultValue={product.category.id}
                    onChange={(e) => onValueChanged(e.target.value)}>
                {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
            </select>
        </td>
    )
}

CategorySelection.propTypes = {
    product: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
}

export default CategorySelection