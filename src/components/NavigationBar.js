import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from "../assets/Images/Logo.png";

export const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setIsNavExpanded(false); // Close mobile menu on selection
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} expanded={isNavExpanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="Nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className={activeLink === 'aboutus' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutus')}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('gallery')}>Gallery</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <Link to="/contact">
              <button className="vvd" onClick={() => onUpdateActiveLink('contact')}><span>Contact Us</span></button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};