import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "../Pages/Home.css";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#C5C6D0", borderBottom:"3.5px Solid gray"}}>
        <Container>
            <Navbar.Brand href="/" style={{color:"white", fontSize:"1.5rem", fontWeight:"600"}}>TAMILNADU TOURISM</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                <Nav className='nav-item'>
                    <Nav.Link href='/'style={{color:"white"}}>Home</Nav.Link>
                    <Nav.Link href='/place-to-visit'style={{color:"white"}}>Place To Visit</Nav.Link>
                    <Nav.Link href='/best-time-to-visit'style={{color:"white"}}>Best Time To Visit</Nav.Link>
                    <Nav.Link href='/packages'style={{color:"white"}}>Packages</Nav.Link>
                    <Nav.Link href='/destination'style={{color:"white"}}>Destination</Nav.Link>
                    <Nav.Link href='/food'style={{color:"white"}}>Food</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation;