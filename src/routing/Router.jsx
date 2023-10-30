import {createBrowserRouter} from "react-router-dom"
import ProductPage from "../pages/products/overview/ProductPage.jsx"
import MainPage from "../pages/MainPage.jsx"
import ProductAdminPage from "../pages/products/admin/ProductAdminPage.jsx";
import config from "../Config.js";
import ErrorPage from "./errorPage/ErrorPage.jsx";
import LoadingPage from "../pages/loading/LoadingPage.jsx";
import ProductDetailsPage from "../pages/products/details/ProductDetailsPage.jsx";

async function fetchData() {
    const [products, categories] = await Promise.all([
        fetch(config.routing.backend.products).then(res => res.json()),
        fetch(config.routing.backend.categories).then(res => res.json())
    ])

    return {products, categories}
}

async function fetchProductsPaged({params}) {
    return fetch(config.routing.backend.products + "?page=" + params.page)
}

async function fetchCategories() {
    return fetch(config.routing.backend.categories)
}

async function fetchProductsByCategory({params}) {
    return fetch(config.routing.backend.products + "/category/" + params.id)
}

async function fetchProductsById({params}) {
    return fetch(config.routing.backend.products + "/" + params.id)
}

const router = createBrowserRouter([
    {
        id: "root",
        Component: MainPage,
        path: config.routing.frontend.productPage,
        children: [
            {
                Component: ProductPage,
                path: config.routing.frontend.productPage + "/page/:page",
                loader: fetchProductsPaged
            },
            {
                Component: ProductDetailsPage,
                path: config.routing.frontend.productPage + "/details/:id",
                loader: fetchProductsById

            },
            {
                Component: ProductPage,
                path: config.routing.frontend.productPage,
                loader: fetchProductsPaged,
            },
            {
                Component: ProductPage,
                path: config.routing.frontend.productByCategoryPage + "/:id",
                loader: fetchProductsByCategory
            },
            {
                Component: ProductAdminPage,
                path: "/admin",
                loader: fetchData
            },
            {
                Component: LoadingPage,
                path: "/loading"
            }
        ],
        loader: fetchCategories,
        errorElement: <ErrorPage />
    }
])

export default router
