import React from 'react';
import webdev from '../src/images/webdev.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';


const Home =() => {
    return(
        <>
         < Common name="Grow your business with" 
                  imgsrc={webdev} 
                  visit='/contact' 
                  btnname="Get Started" />
        </>
    )
};
export default Home;