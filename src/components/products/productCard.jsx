import TagSmall from "../tags/tagSmall.jsx";

function ProductCard({product}) {
    return (<div>
        <h2>{product.name}</h2>
        <div>{product.description}</div>
        <div>{product.tag.map(tag => <TagSmall key={tag.id} tag={tag} />)}</div>


        <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>)
}

ProductCard.propTypes = {
    product: Object
}

export default ProductCard