import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import FooterCard from '../FooterCard/FooterCard';

const News = () => {
const detailsNews = useLoaderData()

const {_id,category_id,title,author,image_url,details} = detailsNews

    return (
       <>
        <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Link to = {`/category/${category_id}`}  ><Button variant="danger">All news in this category</Button></Link>
      </Card.Body>
    </Card>
  
  <FooterCard></FooterCard>
       </>

    );
};

export default News;