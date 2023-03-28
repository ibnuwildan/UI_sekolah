import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoNavbar from "../asset/logo.png";
const Navigation = () => {
  return (
    <div className="mynavbar">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={LogoNavbar} style={{ width: "5rem", marginRight: "3rem" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Kurikulum</Nav.Link>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile sekolah</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Visi & Misi</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Dewan Guru</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">TU & Tata laksana</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Kesiswaan" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ekstrakulikuler</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Siswa/i berprestasi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
