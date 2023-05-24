import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PrimaryLink } from "../PrimaryLink/PrimaryLink";


export const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand><NavLink to="/">Navbar</NavLink></Navbar.Brand>
                        <Nav className="me-auto">
                            <PrimaryLink path='/' title='Home' />
                            <PrimaryLink path='/account' title='Account' />
                        </Nav>
                </Container>
            </Navbar>
        </header>
    )
}