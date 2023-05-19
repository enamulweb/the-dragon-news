import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='mb-3' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>

            <div className='mt-5'>
                <h3>Find Us On</h3>
                <ListGroup>
                <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item><FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='bg-secondary  mt-5'>
                <QZone ></QZone>
            </div>
            <div className='mt-3 position-relative'>
                <img className='rounded' src={bg} alt="" />
                <h2 className='position-absolute top-0 text-white p-5'>This is a faltu section as well...I didn't have any work that's why i design this  section </h2>
            </div>
        </div>
    );
};

export default RightNav;