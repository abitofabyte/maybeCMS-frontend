import { Spinner, Stack } from "react-bootstrap"

export default function LoadingPage() {
	return (
		<Stack className={"h-100 align-items-center justify-content-center"}>
			<Spinner variant="secondary" />
		</Stack>
	)
}
