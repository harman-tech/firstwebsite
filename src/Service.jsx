import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Service =() => {
    return(
        <>
        <div className="mt-5 text-center">
            <h1>Our Services</h1>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-5">
                       {Sdata.map((value,index)=>{
                          return <Card key={index} imgsrc={value.imgsrc}
                                 title={value.title} />
                       })}
                    </div> 
                </div>
            </div>
        </div>          
    </>
    )
};
export default Service;