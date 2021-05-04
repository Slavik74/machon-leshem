import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import './MainNavbar.css'

export default function MainNavbar() {
    return (
        <div className="c-mainnavbar">
            <Navbar expand="md" className="navbar shadow">
            <Navbar.Toggle className="ml-auto toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#/">מכון לשם</Navbar.Brand>        
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto order-0">
                    <Nav.Link className="nav-links"  href="#/online" >הכנה באינטרנט</Nav.Link>
                    <Nav.Link className="nav-links preeminent"  href="#/mivdak">בחן את עצמך חינם</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className="nav-links" href="#/signup">הרשמה</Nav.Link>
                    <Nav.Link className="nav-links" href="#/login">כניסה</Nav.Link>
                    <Nav.Link className="nav-links" href="#/contact">צור קשר</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>    

        </div>

    )
}
