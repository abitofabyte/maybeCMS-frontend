import TagSmall from "../tags/TagSmall.jsx";
import style from "./ProductCard.module.css"
import PropTypes from "prop-types";
import config from "../../Config.js";

function randomInt(max) {
    return Math.floor(Math.random() * max);
}


function ProductCard({product}) {

    const price = product.price > 0 ? product.price.toFixed(2) + config.store.currencySymbol : "free";

    return (<div className={style.card}>
        <img src={"http://picsum.photos/800/600?random=" + randomInt(100)} alt=""/>
        <div className={style.content}>
            <h2 className={style.title}>{product.name}</h2>
            <div className={style.price}>{price}</div>
            <div className={style.seller}>{product.seller.handle}</div>
            <div className={[style.tags].join(" ")}>{product.tags.map(tag => <TagSmall key={tag.id} tag={tag}/>)}</div>
        </div>
    </div>)
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductCard