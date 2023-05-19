import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";
import { AuthContext } from '../../../Provider/AuthProvider';

const NavBar = () => {
    const {user,logout} = useContext(AuthContext);

    const handleLogOut = () => {
      logout()
      .then()
      .catch(error => console.log(error))
    }

    return (
        <Container>
             <Navbar collaNavbarpseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            
              <Link to ='/category/0'>Home</Link>
           
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
          </Nav>
          <Nav >
            <Nav.Link href="#deets"><h3 className='text-primary'><BsPersonCircle></BsPersonCircle></h3></Nav.Link>
            
            {user?
             <Button onClick={handleLogOut} variant="secondary">Log out</Button>
            :
          <Link to='/login'><Button variant="secondary">Log in</Button></Link>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavBar;