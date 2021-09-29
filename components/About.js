import React from 'react'
import { aboutContent } from '../src/content'
import {AiOutlineArrowRight} from "react-icons/ai"


function About() {
    return (
        <div id="about"  className="p-6 pt-14 bg-light lg:px-16">
            <h1 className="flex justify-end font-medium text-dark">{aboutContent.title}</h1>
            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-4 sm:grid-cols-2 ">

            <div className="pl-3" >
                <div>
                <h1 className="font-semibold text-7xl text-dark">{aboutContent.year.number}</h1>
                <div className="text-lg font-medium text-medium">
                <h4>{aboutContent.year.text}</h4>
                <h4>{aboutContent.year.exprience}</h4>
                </div>  
                </div>
                
                
            </div>
            
            {
                aboutContent.experts.map(expert=>(
                    <div className="p-4 py-5 mx-4 text-white shadow-sm bg-medium hover:shadow-xl">
                        <div>{expert.logo}</div>
                        <p>{expert.title}</p>
                        <AiOutlineArrowRight size={24} className="cursor-pointer hover:text-dark"/>
                    </div>
                ))
            }
            
           
         
            </div>
        </div>
    )
}

export default About
