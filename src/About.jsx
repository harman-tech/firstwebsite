import React from 'react';
import Common from './Common';
import web from '../src/images/web.jpg';

const About =() => {
    return(
        <>
        < Common name="About" 
                  imgsrc={web} 
                  visit='/contact' 
                  btnname="Contact Us" />
        </>
        
    )
};
export default About;