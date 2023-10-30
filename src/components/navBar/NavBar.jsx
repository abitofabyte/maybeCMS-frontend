import PropTypes from "prop-types";
import {useLoaderData, useNavigate} from "react-router-dom";
import LoginButton from "./LoginButton.jsx";
import {useStoreContext} from "../../Store/StoreContext.jsx";
import UserMenu from "./UserMenu.jsx";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import config from "../../Config.js";
import {useState} from "react";


function NavBar({title}) {
    const [currentCategory, setCurrentCategory] = useState(null)
    const navigate = useNavigate()
    const categories = useLoaderData()
    const {user} = useStoreContext()

    function handleCategorySelect(category) {
        setCurrentCategory(category)
        navigate(config.routing.frontend.productByCategoryPage + "/" + category.id)
    }

    function handleClearCategory() {
        setCurrentCategory(null)
        navigate(config.routing.frontend.productPage)
    }

    return (
        <Navbar expand="md" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    (╯°□°)╯︵ ┻━┻ {title}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown id={"nav-dropdown"}
                                     title={currentCategory ? currentCategory.name : "Category"}>
                            {categories.map(category => <NavDropdown.Item
                                key={category.id}
                                onClick={() => handleCategorySelect(category)}
                            >{category.name}</NavDropdown.Item>)}
                            {currentCategory ? <>
                                <hr/>
                                <NavDropdown.Item onClick={handleClearCategory}>Reset</NavDropdown.Item></> : ""}
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