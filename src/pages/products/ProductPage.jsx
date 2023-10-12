import {useLoaderData} from "react-router-dom";
import ProductCard from "../../components/product/ProductCard.jsx";
import styles from "./ProductPage.module.css"

export default function ProductPage() {
    const { products } = useLoaderData()

    const content = [...products.content]
    const half = Math.ceil(content.length / 2)

    return (
        <section>
            <div className={styles.content}>
                {content.slice(0, half).map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
            <div className={styles.content}>
                {content.slice(half).map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
        </section>
    )
}
