import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <Container className='mt-4'>
         <div className="text-center">
         <img src={logo} alt="" />
          <p className='text-secondary'> <small>Journalism Without Fear or Favour</small></p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
         </div>
         <div className='d-flex my-4'>
            <Button variant='danger'>Latest</Button>
            <Marquee className='text-danger' speed={50} pauseOnHover={true}>
                I can be a React component, multiple React components, or just some text............. I can be a React component, multiple React components, or just some text.
            </Marquee>
         </div>

         <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='my-4'>
      <Container >
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant='secondary'>Log In</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;