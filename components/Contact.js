import React, {useState} from 'react'
import Link from "next/link"
import {AiFillGithub, AiOutlineInstagram, AiFillLinkedin} from "react-icons/ai"

function Contact() {
    const [name , setName]= useState()
    const [email , setEmail] = useState()
    const [projectDetail, setProjectDetail] = useState()
    
    const summit = (e)=>{
        e.preventDefault()
        alert("Summited")
        setName(name)
        setEmail(email)
        setProjectDetail(projectDetail)

        console.log(name)
    }

    
    return (
        <div id="contact" className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2">
            {/* left */}
            <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-semibold text-medium"> Let's Connect</h1>
            <p className="font-light text-medium">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used 
            to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
            
            <p className="text-lg font-medium transition duration-150 ease-in-out text-medium hover:scale-105">Amrit Ghimire</p>
            <p className="text-lg font-medium transition duration-150 ease-in-out text-medium hover:scale-105">amritghimire533@gmail.com</p>
            <p className="text-lg font-medium transition duration-150 ease-in-out text-medium hover:scale-105 ">9818549923</p>
            
            <div>
            <div className="flex items-center pr-4 lg:px-10 space-x-9 text-medium">
               <Link href="https://github.com/amrit713">
                   <a>
                   <AiFillGithub   size="3rem" className="hover:text-dark"/>   
                   </a>
               
               </Link>
                
                <Link href="https://www.linkedin.com/in/amrit-ghimire-b2488a199/">
                    <a>
                    <AiFillLinkedin size="3rem" className="hover:text-dark"/>
                    </a>
                </Link>
                
                <Link href="https://www.instagram.com/am_rit_ghimire/?hl=en">
                <a>
                <AiOutlineInstagram size="3rem" className="hover:text-dark"/> 
                </a>
                </Link>

                
           </div>
            </div>
            </div>
            

            {/* right */}
            <div>
                <p className="mb-10 text-lg font-medium text-medium">let's message me and make something together !</p>
                <form action="" onSubmit={summit} >
                <div className="flex flex-col w-full space-y-6">
                <input className="px-3 py-2 rounded-md bg-light" type="text" placeholder="Your Name" value={name}
                onChange={()=>setName(name)} />
                <input className="px-3 py-2 rounded-md bg-light" type="text" placeholder="Your Email" value={name}
                onChange={()=>setEmail(email)} />
              
                <textarea className="px-3 py-2 rounded-md bg-light" name="text" placeholder="project Detail" cols="3" rows="2"
                value={name}
                onChange={()=>setProjectDetail(projectDetail)}/>
                </div>
                
                <button className="px-6 py-2 mt-6 text-white transition duration-500 ease-out bg-medium active:scale-110 hover:bg-dark" 
                >SEND</button>
                
                    
                </form>
                
            </div>
        </div>
    )
}

export default Contact
