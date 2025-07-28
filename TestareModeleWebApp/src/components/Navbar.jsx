import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Meniul principal de navigatie
export function NavBar() {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">RezolvaCuAI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Menu" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/testare">Testare</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/documentare">Documentare</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/help">Help</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/about">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}