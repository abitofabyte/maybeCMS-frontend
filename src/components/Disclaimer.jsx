import { Card, Container } from "react-bootstrap"

export function Disclaimer() {
	return (
		<Container className="my-5">
			<Card className="p-4">
				<Card.Body>
					<Card.Title className="text-danger">
						Disclaimer: Educational Project and Ownership Acknowledgment
					</Card.Title>
					<Card.Text>
						Asset Flipper is intended purely as educational project. The platform provides access to a wide
						variety of 3D models and textures, the usage of any assets provided is strictly forbidden
						without explicit consent of the respective owners.
					</Card.Text>
					<Card.Text>
						It is important to note that all 3D models and textures featured on Asset Flipper belong to
						their respective owners and creators. We do not claim ownership of these assets, and they are
						provided on our platform without the consent of the original artists and rights holders.
					</Card.Text>
					<Card.Text>
						Users of Asset Flipper are expected to respect the rights and licenses associated with each
						asset. If you intend to use any of the assets for purposes other than educational projects, it
						is your responsibility to ensure that you have the appropriate permissions and licenses from the
						original creators and owners.
					</Card.Text>
					<Card.Text>
						Asset Flipper encourages users to appreciate and acknowledge the hard work and creativity of the
						talented artists who contribute their work to our platform. If you have any questions or
						concerns regarding ownership, licensing, or usage of any asset, please feel free to reach out to
						us for clarification.
					</Card.Text>
					<Card.Text>
						By accessing and using Asset Flipper, you agree to abide by these terms and conditions and
						understand that the platform is meant primarily for educational purposes. We are here to support
						your creative and educational endeavors while respecting the rights and contributions of the
						artists and creators who make this resource possible.
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	)
}
