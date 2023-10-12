import PropTypes from "prop-types";
import TableRow from "../../table/TableRow.jsx";

import style from "./ProductTableEntry.module.css"
import NameInput from "./NameInput.jsx";
import CategorySelection from "./CategorySelection.jsx";

function ProductTableEntry({product, categories}) {

    return (
        <TableRow>
            <td><input className={style.selector} type={"checkbox"} /></td>
            <NameInput product={product} />
            <td><div className={style.description}>{product.description}</div><button>E</button></td>
            <CategorySelection product={product} categories={categories} />
            <td className={style.tags}>{product.tags.map(tag => <div key={tag.id}>{tag.name}</div>)}</td>
            <td>{product.price.toFixed(2)}</td>
            <td>{product.vat.amount * 100}%</td>
            <td>{product.discount ? product.discount.name : "none"}</td>
        </TableRow>
    )
}

ProductTableEntry.propTypes = {
    product: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
}

export default ProductTableEntry