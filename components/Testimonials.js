import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {testimonials} from "../src/content"


function Testimonials() {
    return (
        <div className="px-6 py-6 mt-1 bg-light lg:px-16">
            
            <Carousel
            autoPlay={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            swipeable={true}
            interval={6000}
            infiniteLoop={true}
            >
            {
              testimonials.map(testimonial=>(
               <div className="p-8 bg-gray-100 rounded-lg md:flex md:p-0">
                   
                       <img src={testimonial.src} className="md:object-cover object-contain w-32 h-32 mx-auto md:w-48 md:h-[350px] md:rounded-none "  />
                       <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                       <blockquote>
      <p class="text-lg font-semibold text-medium">
        {testimonial.Text}
      </p>
    </blockquote>  
   
      <div className="font-medium text-gray-400">
        {testimonial.name}
      </div>
      
      </div>
       </div>
              
              
              ))  
            }
                
            </Carousel>
        </div>
    )
}

export default Testimonials
