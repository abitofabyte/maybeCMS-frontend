import {useLoaderData} from "react-router-dom";
import ProductCard from "../../../components/product/card/ProductCard.jsx";
import style from "./ProductPage.module.css"
import PropTypes from "prop-types";

function ProductPage({itemsPerRow = 4}) {
    const products = useLoaderData()

    function createRows(productArray, itemsPerRow) {
        return Array(Math.ceil(productArray.length / itemsPerRow))
            .fill(0)
            .map((_, i) => productArray.slice(i * itemsPerRow, i * itemsPerRow + itemsPerRow))
    }

    function ProductDisplay({products}) {
        return (
            products.map((products, i) => <div key={i} className={style.content}><ProductRow products={products} /></div>)
        )
    }
    function ProductRow({products}) {
        return (
            products.map(product => <ProductCard key={product.id} product={product}  />)
        )

    }

    const rows = createRows(products.content, itemsPerRow)

    return (
        <div className={style.container} >
            <ProductDisplay products={rows} />
        </div>
    )
}

ProductPage.propTypes = {
    itemsPerRow: PropTypes.number
}

export default ProductPage
