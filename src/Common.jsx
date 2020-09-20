import React from 'react';
import webdev from '../src/images/webdev.jpg';
import { NavLink } from 'react-router-dom';

const Common =(props) => {
    return(
        <>
         <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                             <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1> {props.name} <strong className="brand-name">Harman Tech</strong></h1>
                                <h2 className="my-3">we are a team of enthusiastic developers</h2>
                                    <div className="mt-3">
    <NavLink className="btn btn-outline-info" to={props.visit}>{props.btnname}</NavLink>
                                    </div>
                             </div>
                    

                             <div className="col-lg-6 order-1"> 
                                   <img src={props.imgsrc} className="img-fluid animated rounded-pill" alt="image1"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
          </section>
        </>
    )
}
export default Common;