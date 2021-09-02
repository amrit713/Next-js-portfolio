
import {SiDesignernews} from "react-icons/si"
import {FaDatabase} from "react-icons/fa"
import {FiMonitor, FiFigma} from "react-icons/fi"
import {CgWebsite} from "react-icons/cg"
import {AiOutlineMobile} from "react-icons/ai"

import AmazonImg from "../public/images/amazon.png"
import NetflixImg from "../public/images/netflix.png"
import SpotifyImg from "../public/images/spotify.png"
import DeveloperSvg from "../public/developer.svg"
import AirbnbImg from "../public/images/Airbnb.png"


export const title= "Portfolio"

export const headerTitle=[
    {
        title:"Home", 
        label :"home"
    },
    
    {
        title:"About", 
        label :"about"
    },
    {
        title:"Project", 
        label :"project"
    },
    {
        title:"Services", 
        label :"service"
    },
    {
        title:"Contact", 
        label :"contact"
    },

   
]

export const homePart ={
    firstName:"AMIRT",
    LastName:"GHIMIRE",
    img:DeveloperSvg,

    description:`A web designer with the knowledge of UI/UX and 
    with coding knowledge of HTML, CSS and JS, React, 
    Next js and TailwindCSS . Some backend knowledge 
    of FastAPI and Django`,

    btnTitle:"HIRE ME"
}

export const projects = {
    title:"Projects",
    projects:[
        {
            title:"Amazon Clone",
            description: "This project is build with the help of React js,Next js , Redux and Tailwind Css. This project is the clone of the amazon website and This app called the Amazon-Clone.",
            image:AmazonImg,
            i:1,
            develop:{
                react:"React",
                next :"Next",
                redux:"Redux"
            },
            source:"https://amazon-clone-lkhv1p93b-amrit713.vercel.app/",
            code:"https://github.com/amrit713/Amazon-clone"

        },
        {
            title:"Netflix Clone",
            description: "This project is build with the help of React js, Redux and CSS3. This project is the clone of the netflix website and This app called the Netfix-Clone.",
            image:NetflixImg,
            id:2,
            develop:{
                react:"React",
                
                redux:"Redux"
            },
            source:"https://netflix-clone-44fc3.firebaseapp.com/",
            code:"#"

        },
        {
            title:"Spotify Clone",
            description: "This project is build with the help of React js, Redux and CSS3. This project is the clone of the Spotify Music Player website and This app called the Spotify-Clone.",
            image:SpotifyImg,
            id:3,
            develop:{
                react:"React",
                
                redux:"Redux"
            },
            code:"https://github.com/amrit713/Spotify-Clone",
            source:"#"


        },
        {
            title:"airbnb Clone",
            description: "This project is build with the help of React js, Next js and tailwind. This project is the clone of the Airbnb website and This app called the Airbnb-Clone.",
            image:AirbnbImg,
            id:3,
            develop:{
                react:"React",

                next:"Nextjs",
                
                tailwindcss:"Tailwindcss"
            },
            code:"https://airbnb-clone-zeta-ten.vercel.app/",
            source:"https://github.com/amrit713/Airbnb_clone"


        }
    ]
}


export const aboutContent={
    title:`Product Designer and Developer, UI/UX 
    designer and Frontend Developer`,

    year:{
        number:"1+",
        text:"Year",
        exprience:"Exprience"
    },
    experts:[{
        title:"Product Designer",
        logo:<SiDesignernews size ="4em"/>
    },
    {
        title:"Backend Developer",
        logo:<FaDatabase size="4em"/>
    },
    {
        title:"Frontend Developer",
        logo:<FiMonitor size="4em" />
    }
]

}

export const services=[{
    title:"Figma Design",
    description:"We will design the website and mobile app with figma App.",
    icon:<FiFigma size="4rem"/> 
},

{
    title:"Website",
    description:"Make Your website today and engage your audiance. We provide the profesional websites with best design and services.",
    icon:<CgWebsite size="4rem" />
},

{
    title:"Backend",
    description:"we will make the RestAPI as your requirement",
    icon: <FaDatabase size="4rem"/>
},
{
    title:"Mobile App",
    description:"We will fully responive mobile app as your requirement.",
    icon: <AiOutlineMobile size="4rem"/>
}

]


export const testimonials =[
    {
    src:"https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Text:`"Amrit is expectionally talented 
    & well rounded designer. He 
    brings to our comapnies his 
    infectious enthusiam creativity 
    to everything he work on" `,

    name:"jenny deff -CEO"
},
    {
    src:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBvdHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Text:`"Amrit is expectionally talented 
    & well rounded designer. He 
    brings to our comapnies his 
    infectious enthusiam creativity 
    to everything he work on" `,

    name:"John Smith -Developer"
},
    {
    src:"https://images.unsplash.com/photo-1602077422495-c8733eb58c34?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Text:`"Amrit is expectionally talented 
    & well rounded designer. He 
    brings to our comapnies his 
    infectious enthusiam creativity 
    to everything he work on" `,

    name:"Smriti Smith - Designer"
},

]