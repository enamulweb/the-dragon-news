import React from 'react';
import Category from '../../Home/Category/Category';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FooterCard from '../../News/FooterCard/FooterCard';

const CategoryNews = ({category}) => {
    const {_id,category_id,rating,title,author,image_url,details} = category
    //console.log(category)
    const navigate = useNavigate()

    const handleClick = () => {
         navigate(`/news/${_id}`)
        
    }
    
    return (
        <div>
             <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
            {
                details.length< 250 ? 
                <>{details}</>:
                <> {(details.slice(0,250))} ... <Button className='link' variant='link'  onClick={handleClick}>see more</Button>  </>
            }
         
          
{/* <Link to={`news/${_id}`}>See More</Link> */}
          
        </Card.Text>
       
      </Card.Body>
    </Card>


        </div>
    );
};

export default CategoryNews;