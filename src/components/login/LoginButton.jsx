import { useState } from "react"
import LoginModal from "./LoginModal.jsx"
import { Button } from "react-bootstrap"
import { VscAccount } from "react-icons/vsc"

function LoginButton() {
	const [show, setShow] = useState(false)

	function handleShowModal() {
		setShow((old) => !old)
	}

	return (
		<>
			<Button
				type="button"
				size="lg"
				className="d-flex justify-content-center align-items-center"
				variant="outline-dark"
				onClick={handleShowModal}>
				<VscAccount />
			</Button>
			<LoginModal
				show={show}
				onHide={handleShowModal}
			/>
		</>
	)
}

export default LoginButton
