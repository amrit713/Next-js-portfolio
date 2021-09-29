import React from 'react'

import {headerTitle} from "../src/content"


function BottomHeader() {
    return (
       
                 
           <div className="sticky bottom-0 z-50 flex items-center justify-around flex-grow py-4 bg-light rounded-t-3xl sm:hidden">
                {
                    headerTitle.map((header)=>(
                       <a href={header.label}> <p className="font-medium transition duration-200 ease-out cursor-pointer text-medium hover:text-dark active:scale-105">{header.title}</p> </a>
                           
                           
                        
                    ))
                }
          
        </div>
    )
}

export default BottomHeader
