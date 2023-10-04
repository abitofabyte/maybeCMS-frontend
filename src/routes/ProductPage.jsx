import {useLoaderData} from "react-router-dom";
import ProductCard from "../components/products/productCard.jsx";

//https://stackoverflow.com/questions/76824418/can-you-use-multiple-fetches-in-one-loader-with-createbrowserrouter-react-router#:~:text=In%20React%20Router%20v6%2C%20you,%2C%20items%5D%20%3D%20await%20Promise.
export default function ProductPage() {
    const products = useLoaderData();

    return <>
        <div>
            {products.map(product => <ProductCard key={product.id} product={product}/>)}
        </div>
        <pre>{JSON.stringify(products, null, 2)}</pre>
    </>
}
