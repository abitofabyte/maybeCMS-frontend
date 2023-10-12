import {useLoaderData} from "react-router-dom";
import Table from "../../../components/table/Table.jsx";
import ProductTableEntry from "../../../components/product/admin/ProductTableEntry.jsx";

import "./ProductAdminPage.module.css"

function ProductAdminPage() {

    const {products, categories} = useLoaderData()
    const headers = [
        "",
        "Name",
        "Description",
        "Category",
        "Tags",
        "Price",
        "VAT",
        "Discount"
    ]

    return (
        <section>
            <Table headers={headers}>
                {products.content.map(product => <ProductTableEntry key={product.id} product={product} categories={categories}/>)}
            </Table>
        </section>
    )
}

export default ProductAdminPage