import React from 'react'
import Image from "next/image"
import {Link as A} from "react-scroll"
import {AiFillGithub, AiOutlineInstagram, AiFillLinkedin} from "react-icons/ai"

import Link from "next/link"

import {headerTitle} from "../src/content"


function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between flex-grow bg-white">
            {/* left part */}
            <div className="h-[60px] w-[200px]  bg-light rounded-br-full p-1 py-2  items-center lg:w-[350px] sm:flex-grow-0 lg:px-10 ">
                
               
                    <A 
                    activeClass="active"
                    to="home"
                    smooth={true}
                    duration={500}
                    className="flex items-center cursor-pointer "
                    >
                         <div className="relative w-10 h-10 ml-4 ">
                <Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" layout="fill" objectFit="cover" className="rounded-full" />
                </div>
                <h1 className="ml-4 text-lg font-medium text-medium hover:text-dark">Portfolio</h1>
                    </A>
            </div>

            {/* center part */}
            
            <div className="items-center flex-grow hidden space-x-1 justify-evenly sm:flex lg:px-10">
                {
                    headerTitle.map((header)=>(
                       <a href={header.label}> <p className="font-medium transition duration-200 ease-out cursor-pointer text-medium hover:text-dark active:scale-105">{header.title}</p> </a>
                           
                           
                        
                    ))
                }
            </div>

            {/* right side */}

           <div className="flex items-center justify-end pr-4 lg:px-10 space-x-9 text-medium">
               <Link href="https://github.com/amrit713">
                   <a>
                   <AiFillGithub   size={24} className="hover:text-dark"/>   
                   </a>
               
               </Link>
                
                <Link href="https://www.linkedin.com/in/amrit-ghimire-b2488a199/">
                    <a>
                    <AiFillLinkedin size={24} className="hover:text-dark"/>
                    </a>
                </Link>
                
                <Link href="https://www.instagram.com/am_rit_ghimire/?hl=en">
                <a>
                <AiOutlineInstagram size={24} className="hover:text-dark"/> 
                </a>
                </Link>

                
           </div>
           
        </header>
    )
}

export default Header
