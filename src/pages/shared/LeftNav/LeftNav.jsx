import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
const [categories,setCategories] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(err => console.error(err));
} ,[])

    return (
        <div>
            <h4>All category</h4>
            <div>
            {
                categories.map(category => <p
                     key={category.id}
                >
                    <Link className='text-dark text-decoration-none' to={`/category/${category.id}`} >{category.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
};

export default LeftNav;