import { createContext, useContext, useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"

import { useAuth } from "./AuthProvider.jsx"
import { handleTransactions, getTransactionBuilder } from "../dbUtils/dbUtils.js"

const DataContext = createContext(null)

DataProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export function DataProvider({ children }) {
	const { user } = useAuth()
	const [categories, setCategories] = useState(null)
	const [discounts, setDiscounts] = useState(null)
	const [products, setProducts] = useState(null)
	const [tags, setTags] = useState(null)
	const [vats, setVats] = useState(null)

	const getProductByCategory = async (category, searchParams) => {
		console.log(category, searchParams)
		const [products] = await handleTransactions(transactionBuilder.products.getByCategory(category, searchParams))
		setProducts(products)
	}

	const getProduct = async (name) => {
		const [product] = await handleTransactions(transactionBuilder.products.getOne(name))
		setProducts(product)
	}

	const transactionBuilder = useMemo(() => {
		return getTransactionBuilder(user)
	}, [user])

	useEffect(() => {
		async function init() {
			const [categories, tags] = await handleTransactions(
				transactionBuilder.categories.get(),
				transactionBuilder.tags.get()
			)
			setCategories(categories)
			setTags(tags)
		}

		init()
	}, [user])

	const data = useMemo(
		() => ({
			categories,
			discounts,
			products,
			getProduct,
			getProductByCategory,
			tags,
			vats,
		}),
		[categories, discounts, products, tags, vats]
	)

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export function useData() {
	return useContext(DataContext)
}
