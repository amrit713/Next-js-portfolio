import React from 'react'
import {homePart} from "../src/content"
import Image from "next/image"



function Home() {

   
    return (
        <div id="home" className="grid grid-cols-2 gap-4 pt-14">
            {/* left side */}
            <div className="col-span-2 sm:col-span-1">
            
            <div className="flex flex-col mb-4 space-y-2 text-medium">
                <h1 className="text-7xl text-dark">{homePart.firstName}</h1>
                <h1 className="text-7xl">{homePart.LastName}</h1>
                <p className="w-full ">{homePart.description}</p>
            </div>
            <a download href="./resumeforreact.pdf"
             className="p-2 px-6 transition duration-500 ease-out bg-medium text-light hover:bg-dark active:scale-110">
                {homePart.btnTitle}</a>
            
            </div>

            {/* right side */}
            <div className=" flex justify-end pt-20 rounded-tl-[180px] pl-9  sm:bg-light place-items-end col-span-2 sm:col-span-1 xl:rounded-tl-[300px]">

                <div className="relative w-[220px] h-[170px]   lg:w-[300px] lg:h-[250px] xl:w-[400px] xl:h-[350px] ">

                    <Image src={homePart.img} layout="fill"/>               
                     </div>
            </div>

        </div>
    )
}

export default Home
