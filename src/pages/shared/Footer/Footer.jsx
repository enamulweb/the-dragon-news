import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='text-center mt-5 mb-4'>
           <span className='text-danger'><FaRegCopyright></FaRegCopyright></span>  <small className='text-center text-danger '>copyright of my news</small> 
        </div>
    );
};

export default Footer;