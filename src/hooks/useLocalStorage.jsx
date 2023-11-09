import { useState } from "react"

export function useLocalStorage(key, defaultValue) {
	const [store, setStore] = useState(() => JSON.parse(localStorage.getItem(key)) ?? defaultValue)
	const setValue = (value) => {
		localStorage.setItem(key, JSON.stringify(value))
		setStore(value)
	}
	return [store, setValue]
}
