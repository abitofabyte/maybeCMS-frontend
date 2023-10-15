import TagSmall from "../../tags/TagSmall.jsx";
import style from "./ProductCard.module.css"
import PropTypes from "prop-types";
import config from "../../../Config.js";
import {useNavigate} from "react-router-dom";

function ProductCard({product}) {
    const price = product.price > 0 ? product.price.toFixed(2) + config.store.currencySymbol : "free";
    const navigate = useNavigate();

    function onCardClick() {
        navigate("/details/" + product.id)
    }

    return (<div className={style.card} onClick={() => onCardClick()}>
        <img src={product.images[0]} alt={"Picture of " + product.name + "."}/>
        <div className={style.content}>
            <div className={style.title}>
                <div>{product.name}</div>
                <div className={style.shortDescription} >
                    <div className={style.seller}>Creator: {product.seller.handle}</div>
                    <div className={style.price}>{price}</div>
                </div>
            </div>
            <div className={[style.tags].join(" ")}>{product.tags.map(tag => <TagSmall key={tag.id} tag={tag}/>)}</div>
        </div>
    </div>)
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductCard