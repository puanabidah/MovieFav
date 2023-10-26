import { Container, Nav, Navbar } from 'react-bootstrap';
import '../App.css';

function Navigation() {
  return (
    <Navbar
      fixed="top"
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-2 nav-brand">
          MovieFav
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3 fs-5">
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#link">Watchlist</Nav.Link>
            <Nav.Link href="#link">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
