import Head from "next/head"
import React from "react"

import Header from "../components/Header"
import Home from "../components/Home"
import About from "../components/About"
import Project from "../components/Project"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"

function index() {
  return (
    <div>
      <Head>
      <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main >
        
    <div className="px-6 lg:px-16">
    <Home/>
    </div>
      
      <About/>
      
      <div className="px-6 lg:px-16">
        <Project/>
        <Services/>
      </div>

      <Testimonials/>

      <div className="px-6 lg:px-16">
        <Contact />
        
      </div>

      </main>
      
    </div>
  )
}

export default index


