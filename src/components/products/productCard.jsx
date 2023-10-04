import TagSmall from "../tags/tagSmall.jsx";
import style from "./productCard.module.css"

function ProductCard({product}) {
    return (<div className={style.card}>
        <h2>{product.name}</h2>
        <div>{product.description}</div>
        <div>{product.tags.map(tag => <TagSmall key={tag.id} tag={tag} />)}</div>
    </div>)
}

ProductCard.propTypes = {
    product: Object
}

export default ProductCard