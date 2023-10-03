function ProductCard({product}) {
    return (<div>
        <h2>{product.name}</h2>
        <div>{product.description}</div>
        ,

        <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>)
}

ProductCard.propTypes = {
    product: Object
}

export default ProductCard