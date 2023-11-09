import { Container, Image, Stack } from "react-bootstrap"
import { getTransactionBuilder } from "../dbUtils/dbUtils.js"
import { Disclaimer } from "../components/Disclaimer.jsx"

export function LandingPage() {
	return (
		<Container>
			<Stack
				direction="vertical"
				gap="5">
				<h2>Discover Asset Flipper: Your Ultimate Source for 3D Models and Textures!</h2>
				<Stack
					className="align-items-md-start"
					direction="horizontal"
					gap="4">
					<Image
						className="w-75"
						src="/images/scene01.webp"
						alt="scene01"
						fluid
					/>
					<Container>
						<p>
							Asset Flipper is your go-to destination for an extensive collection of 3D models and
							textures. No matter your creative pursuit, our platform is here to provide you with the
							assets you need to elevate your projects.
						</p>
						<p>
							{" "}
							Asset Flipper is more than an online marketplace - it is a hub where creators come together
							to make your vision a reality. Explore our diverse range of 3D models and textures today to
							transform your projects into something exceptional.
						</p>
					</Container>
				</Stack>
				<h2>An Unrivaled Selection</h2>
				<Stack
					className="align-items-md-start"
					direction="horizontal"
					gap="4">
					<Container>
						<p>
							Asset Flipper boasts a vast and diverse library of 3D models and textures sourced from
							skilled creators worldwide. From highly detailed objects to lifelike textures, our selection
							spans across various categories to cater to a wide range of creative needs.
						</p>
						<p>
							Whether you are developing a video game, working on architectural visualizations, or any
							other creative endeavor, you will find the perfect resources to breathe life into your
							ideas.
						</p>
					</Container>
					<Image
						className="w-75"
						src="/images/character01.jpeg"
						alt="scene02"
						fluid
					/>
				</Stack>
				<h2>Quality Assurance</h2>
				<Stack
					className="align-items-md-start"
					direction="horizontal"
					gap="4">
					<Image
						className="w-75"
						src="/images/scene02.webp"
						alt="scene03"
						fluid
					/>
					<Container>
						Quality is at the core of what we do at Asset Flipper. Our team meticulously curates every asset
						featured on our platform, ensuring that each one meets the highest standards. With our
						commitment to quality, you can trust that the 3D models and textures you acquire will enhance
						your projects and save you valuable time and effort.
					</Container>
				</Stack>
				<h2> User-Friendly Experience</h2>
				<Stack
					className="align-items-md-start"
					direction="horizontal"
					gap="4">
					<Container>
						<p>
							We have designed Asset Flipper to be incredibly user-friendly, making your browsing and
							shopping experience convenient and efficient. Our website allows for easy navigation, quick
							searches, and asset previews, so you can make informed decisions. Additionally, we offer
							straightforward licensing options to accommodate your specific project requirements. With
							our secure and intuitive platform, you can focus on unleashing your creativity.
						</p>
						<p>
							Join us in redefining the creative process and discover a world of possibilities for your
							digital endeavors. Thank you for choosing Asset Flipper, where exceptional assets are just a
							click away!
						</p>
					</Container>
					<Image
						className="w-75"
						src="/images/scene03.webp"
						alt="scene03"
						fluid
					/>
				</Stack>
			</Stack>
			<Disclaimer />
		</Container>
	)
}
