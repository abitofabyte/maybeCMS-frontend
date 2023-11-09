import { router } from "./Router.js"
import { AuthProvider } from "./context/AuthProvider.jsx"
import { RouterProvider } from "react-router-dom"
import LoadingPage from "./pages/LoadingPage.jsx"

export default function MaybeCMS() {
	return (
		<AuthProvider>
			<RouterProvider
				router={router}
				fallbackElement={<LoadingPage />}
			/>
		</AuthProvider>
	)
}
