import React from 'react';
import Header from '../../pages/shared/Header/Header';
import Footer from '../../pages/shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../../pages/shared/leftnav/LeftNav';
import RightNav from '../../pages/shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavBar from '../../pages/shared/NavBar/NavBar';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>

            <Container>
      <Row>
        <Col lg={3}>
        <LeftNav></LeftNav>
        </Col>
        <Col lg={6}> 
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

export default Main;