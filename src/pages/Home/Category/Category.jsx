import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryNews from '../../shared/CategoryNews/CategoryNews';

const Category = () => {
    const categoryNews = useLoaderData()

    const {id} = useParams()
    return (
        <div>
            {
               id && <h2>category number : {categoryNews.length}</h2>
            }
            {
                categoryNews.map(category => <CategoryNews key={category._id} category={category} ></CategoryNews> )
            }
        </div>
    );
};

export default Category;