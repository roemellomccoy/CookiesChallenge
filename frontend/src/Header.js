import { Navbar, Container, Nav } from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar variant="dark" bg="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav className="me-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Some User</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;