import {useState} from "react";
import PropTypes from "prop-types";
import {Button, Image, Offcanvas, Stack} from "react-bootstrap";
import style from "./UserMenu.module.css"
import {useStoreContext} from "../../Store/StoreContext.jsx";

function UserMenu({user}) {
    const {logout} = useStoreContext()
    const [show, setShow] = useState(false);
    const {handle, email, profilePicture} = user

    const toggleUserMenu = () => setShow(old => !old)
    const handleLogout = () => logout();

    return (
        <>
            <Image className={style.size}
                   src={profilePicture}
                   alt={handle}
                   roundedCircle
                   fluid
                   onClick={toggleUserMenu}
            />
            <Offcanvas show={show}
                       onHide={toggleUserMenu}
                       placement="end">
                <Offcanvas.Header closeButton>
                        <Stack direction="horizontal" gap="4">
                            <Image className={style.size}
                                   src={profilePicture}
                                   alt={handle}
                                   roundedCircle
                                   fluid
                            />
                            <Stack>
                                <div className="fw-bold">{handle}</div>
                                <div>{email}</div>
                            </Stack>
                        </Stack>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column">
                    <Button className="justify-self-end" onClick={handleLogout}>
                        Logout
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )

}

UserMenu.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserMenu