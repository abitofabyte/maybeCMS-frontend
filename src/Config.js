const backend = "http://127.0.0.1:9001/"
const root = "/"
export default {
    routing: {
        backend: {
            login: backend + "authenticate",
            products: backend + "products",
            categories: backend + "categories"
        },
        frontend: {
            productPage: root,
            productByCategoryPage: root + "category"
        }
    },
    page: {
        title: "Asset Flipper"
    },
    store: {
        currencySymbol: "€"
    }
}
