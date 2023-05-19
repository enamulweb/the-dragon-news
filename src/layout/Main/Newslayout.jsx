import React from 'react';
import Header from '../../pages/shared/Header/Header';
import Footer from '../../pages/shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../../pages/shared/leftnav/LeftNav';
import RightNav from '../../pages/shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const Newslayout = () => {
    return (
        <div>
        <Header></Header>

        <Container className='mt-4'>
  <Row>
    
    <Col lg={9}> 
    <Outlet></Outlet>
    </Col>
    <Col lg={3}>
    <RightNav></RightNav>
    </Col>
  </Row>
</Container>
        <Footer ></Footer>
    </div>
    );
};

export default Newslayout;