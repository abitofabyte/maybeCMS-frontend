import PropTypes from "prop-types";
import {useLoaderData} from "react-router-dom";
import LoginButton from "./LoginButton.jsx";
import {useStoreContext} from "../../Store/StoreContext.jsx";
import UserMenu from "./UserMenu.jsx";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


function NavBar({title}) {
    const categories = useLoaderData()
    const {user} = useStoreContext()

    return (
        <Navbar expand="md" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    (╯°□°)╯︵ ┻━┻ {title}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown id={"nav-dropdown"} title="Categories">
                            {categories.map(category => <NavDropdown.Item
                                key={category.id}
                                href={"/category/" + category.id}
                            >{category.name}</NavDropdown.Item>)}
                        </NavDropdown>
                        <Container className="align-self-end">
                            {user ? <UserMenu user={user}/> : <LoginButton/>}
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

NavBar.propTypes = {
    title: PropTypes.string
}

export default NavBar