import style from "./LoadinPage.module.css"
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner.jsx";

export default function LoadingPage() {
	return (
		<div className={style.container} >
			<LoadingSpinner />
		</div>
	)
}
