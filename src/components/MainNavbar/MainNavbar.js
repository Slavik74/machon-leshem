import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import Contact from '../Contact/Contact';
import './MainNavbar.css'
import logo from './../../assets/images/clip-art-green-checkmark.png'

export default function MainNavbar({activeUser, onLogout}) {

    const [showContact, setShowContact] = useState(false);

    const handleShowContact = (e) => {
        e.preventDefault();
        setShowContact(true)
    }

    const handleHideContact = (e) => {
        setShowContact(false)
    }


    return (
        <>
        {showContact?<Contact handleHide={handleHideContact} />:null}

        <div className="c-mainnavbar">
            <Navbar expand="md" className="navbar shadow">
            <Navbar.Toggle className="ml-auto toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#/">
                <img src={logo} className="logo-img" alt=""></img>
                <span className="brand">מכון לשם</span>                
            </Navbar.Brand>        
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto order-0">
                    <Nav.Link className="nav-links"  href="#/online" >מבחני קבלה לעבודה</Nav.Link>
                    <Nav.Link className="nav-links preeminent"  href="#/mivdak">בחן את עצמך חינם</Nav.Link>
                </Nav>
                <Nav>
                    {
                        activeUser?
                            <Nav.Link className="nav-links" href="#" onClick={() => onLogout()}>יציאה</Nav.Link>
                        :
                            <>
                            <Nav.Link className="nav-links" href="#/signup">הרשמה</Nav.Link>
                            <Nav.Link className="nav-links" href="#/login">כניסה</Nav.Link>    
                            </>
                    }
                    <Nav.Link className="nav-links" href="#" onClick={handleShowContact}>צור קשר</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>    

        </div>
        </>

    )
}
