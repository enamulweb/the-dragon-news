import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {

 
    return (
        <div className='container'>
          <div className='text-center mt-3'>
          <img src={logo}  />
          <p className='mt-3 text-secondary' > Journalism Without Fear or Favour </p>
            {moment().format('MMMM Do YYYY')}
          </div>
          <Container className='d-flex bg-light' >
          <Button variant="danger">Latest</Button>
          <Marquee className='text-danger'>
            I can be a React component, multiple React components, or just some text........  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
          </Marquee>
          </Container>
         
   
          
        </div>
    );
};

export default Header;