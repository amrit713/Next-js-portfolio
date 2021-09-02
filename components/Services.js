import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {services} from "../src/content"

function Services() {
    return (
        <div id="service" className="my-10">
            
            <h1 className="mb-4 text-4xl font-semibold text-medium">Services</h1>

            <div>
                <Carousel
                autoPlay
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                swipeable={true}
                interval={2000}
                
                >
                
                {
                   services.map(service=>(
                       <div key={service.title} className="text-center">
                           
                           <div className="flex items-center justify-center mb-2 text-dark">{service.icon}</div>
                            <h1 className="mb-2 text-3xl font-semibold text-medium ">{service.title}</h1>
                            <p className="font-light mb-9 text-medium">{service.description}</p>                         
                       </div>
                   )) 
                }
                
                    
                </Carousel>
            </div>
             
        </div>
    )
}

export default Services
