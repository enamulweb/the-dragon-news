import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/editorsInsight1.png'
import second from '../../../assets/editorsInsight2.png'
import third from '../../../assets/editorsInsight3.png'

const FooterCard = () => {
    return (
        <div className='mt-5'>
            <Row xs={1} md={2} lg={3} className="g-4">
            <Card className='p-2' >
            <Card.Img variant="top" src={first} />
            <Card.Body>
              
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
            <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
            
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
            <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
             
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
    </Row>
        </div>
    );
};

export default FooterCard;