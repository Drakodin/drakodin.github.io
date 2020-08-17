import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect variant="dark" sticky="top" expand="md" style={{backgroundColor: "black", zIndex: 2}}>
            <Navbar.Brand>

            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#/projects">
                        Projects
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        </Navbar>
    )
}

export default Navigation;