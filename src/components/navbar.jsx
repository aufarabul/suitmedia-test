import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import * as image from "../assets/img";
import "./style.css"; // Pastikan Anda memiliki file CSS untuk styling tambahan

function NavbarComponent() {
  const [activeLink, setActiveLink] = useState(""); // State to track active link
  const [showNavbar, setShowNavbar] = useState(true); // State to track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position
  const [isTop, setIsTop] = useState(true); // State to track if at the top of the page

  const handleClick = (link) => {
    setActiveLink(link); // Update state on link click
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scroll down
      setShowNavbar(false);
    } else {
      // Scroll up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
    setIsTop(window.scrollY === 0); // Check if at the top of the page
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const styles = {
    active: {
      borderBottom: "2px solid white", // White underline on active link
    },
  };

  return (
    <Navbar
      bg="#fc6316"
      expand="lg"
      variant="dark"
      className={`navbar-custom ${showNavbar ? "show" : "hide"} ${
        isTop ? "top" : ""
      }`}
    >
      <Container>
        <Image
          className="m-0"
          src={image.suitmediaLogo}
          style={{ width: "300px" }}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-end">
            <Nav.Link
              href="#work"
              onClick={() => handleClick("#work")} // Pass link to handleClick
              style={activeLink === "#work" ? styles.active : {}} // Apply inline styles if active
            >
              Work
            </Nav.Link>
            <Nav.Link
              href="#About"
              onClick={() => handleClick("#About")}
              style={activeLink === "#About" ? styles.active : {}}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#Sources"
              onClick={() => handleClick("#Sources")}
              style={activeLink === "#Sources" ? styles.active : {}}
            >
              Sources
            </Nav.Link>
            <Nav.Link
              href="#Ideas"
              onClick={() => handleClick("#Ideas")}
              style={activeLink === "#Ideas" ? styles.active : {}}
            >
              Ideas
            </Nav.Link>
            <Nav.Link
              href="#Careers"
              onClick={() => handleClick("#Careers")}
              style={activeLink === "#Careers" ? styles.active : {}}
            >
              Careers
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              onClick={() => handleClick("#Contact")}
              style={activeLink === "#Contact" ? styles.active : {}}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
