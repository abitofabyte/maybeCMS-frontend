import { useStoreContext } from "../../Store/StoreContext.jsx"
import { useState } from "react"
import { Button, FloatingLabel, Form, Modal, Stack } from "react-bootstrap"
import PropTypes from "prop-types"

function LoginModal({ show, onHide }) {
	const [validated, setValidated] = useState(false)
	const { login } = useStoreContext()

	async function handleSubmit(event) {
		const form = event.currentTarget
		event.preventDefault()
		if (form.checkValidity() === false) {
			event.stopPropagation()
			setValidated(true)

			return
		}

		const formData = new FormData(event.target)
		const email = formData.get("email")
		const password = formData.get("password")

		const isLoggedIn = await login(email, password)

		if (isLoggedIn) onHide()
		else handleReset()
	}

	function handleReset() {
		setValidated(false)
	}

	return (
		<Modal
			show={show}
			onHide={onHide}>
			<Stack className="m-4">
				<Form
					noValidate
					validated={validated}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Stack
						direction={"vertical"}
						gap="2">
						<FloatingLabel
							controlId="email"
							label="Email address">
							<Form.Control
								type="email"
								name="email"
								placeholder="name@example.com"
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please enter a valid email address.
							</Form.Control.Feedback>
						</FloatingLabel>
						<FloatingLabel
							controlId="password"
							label="Password">
							<Form.Control
								type="password"
								name="password"
								placeholder="Password"
								required
							/>
							<Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
						</FloatingLabel>
						<Stack
							direction={"horizontal"}
							gap="2"
							className="justify-content-end">
							<Button type="reset">Reset</Button>
							<Button type="submit">Submit</Button>
						</Stack>
					</Stack>
				</Form>
			</Stack>
		</Modal>
	)
}

LoginModal.propTypes = {
	show: PropTypes.bool.isRequired,
	onHide: PropTypes.func.isRequired,
}

export default LoginModal
