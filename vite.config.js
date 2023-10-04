import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
//import Config from "./src/Config"

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 8001
	},
	plugins: [react()]
})
