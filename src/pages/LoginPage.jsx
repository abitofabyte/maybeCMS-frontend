import { Alert, Button, Card, Container, FloatingLabel, Form, Stack } from "react-bootstrap"
import style from "./LoginPage.module.css"
import { Link, useNavigate } from "react-router-dom"
export function LoginPage() {
	const { login } = useAuth()
	const navigate = useNavigate()
	const [validated, setValidated] = useState(false)
	const [invalidCredentials, setInvalidCredentials] = useState(false)

	async function handleSubmit(event) {
		event.preventDefault()
		if (event.currentTarget.checkValidity() === false) {
			setValidated(true)
			event.stopPropagation()
			return
		}
		const data = new FormData(event.target)
		const success = await login(data.get("email"), data.get("password"))
		if (success) {
			navigate(-1)
			return
		}
		setInvalidCredentials(true)
	}

	return (
		<Container className={style.card}>
			<Form
				noValidate
				validated={validated}
				onSubmit={handleSubmit}>
				<Card className="p-4">
					<Card.Title>Welcome</Card.Title>
					<Card.Text>Log in to Asset Flipper to continue.</Card.Text>
					<Card.Body>
						<Stack gap="4">
							<FloatingLabel
								controlId="email"
								label="Email address">
								<Form.Control
									name="email"
									autoComplete="email"
									type="email"
									placeholder=""
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
									name="password"
									autoComplete="current-password"
									type="password"
									placeholder=""
									required
								/>
								<Form.Control.Feedback type="invalid">
									Please enter your password.
								</Form.Control.Feedback>
							</FloatingLabel>
							{invalidCredentials && <Alert variant="danger">Invalid Credentials!</Alert>}
							<Link to="/">Forgot Password?</Link>
							<Button type="submit">Login</Button>
							<Stack
								direction="horizontal"
								gap="2">
								Don&apos;t have an account?
								<Link
									className="d-inline"
									to="/">
									Sign up
								</Link>
							</Stack>
						</Stack>
					</Card.Body>
				</Card>
			</Form>
		</Container>
	)
}
import { useState } from "react"

import { useAuth } from "../context/AuthProvider.jsx"
