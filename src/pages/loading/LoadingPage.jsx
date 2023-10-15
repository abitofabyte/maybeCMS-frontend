import style from "./LoadinPage.module.css"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.jsx";

export default function LoadingPage() {
	return (
		<div className={style.container} >
			<LoadingSpinner />
		</div>
	)
}
