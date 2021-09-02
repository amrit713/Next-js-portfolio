import React from 'react'
import Image from "next/image"
import Link from "next/link"

import {projects} from "../src/content"

function Project() {
    return (
        <div id="project" className="mt-10 ">
           <h1 className="mb-4 text-4xl font-semibold text-medium">{projects.title}</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                  projects.projects.map((project)=>(
                      <div className="w-full overflow-hidden text-white border-none bg-medium">
                          <div className="">
                              <Image className="object-cover" src={project.image} />
                          </div>
                          
                        <div className="p-2 ">
                            
                       
                        <p className="text-lg font-semibold text-center text-white">{project.title}</p>
                          <div>
                              <div className="mt-3">
                                  <p>{project.description}</p>
                              </div>
                              
                              <div className="flex my-2 font-medium justify-evenly ">
                              <p>{project.develop.react}</p>
                                <p>{project.develop.next}</p>
                                <p>{project.develop.redux}</p>
                                <p>{project.develop.tailwindcss}</p>    
                              </div>
                              
                              <div className="flex justify-around">
                                  <Link href={project.code}>
                                      <a className="p-1 px-4 font-semibold bg-white text-medium">Code</a> 
                                      </Link>
                                  <Link href={project.source}> 
                                  <a className="p-1 px-2 font-semibold bg-white text-medium">Source</a> 
                                  </Link>
                                  
                              </div>
                              
                              
                          </div>
                          </div>
                      </div>
                  ))  
                }
            </div>
           
        </div>
    )
}

export default Project
