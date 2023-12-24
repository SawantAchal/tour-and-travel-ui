import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import img6 from '../Assets/images/image13.avif'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="about"
        heroImg ={img6}
        Htitle="About"
        // Htext="chose ypur favourite destination"
        // btmText="travel Plan"
        // url ="/travel-plan"
        // btnClass="show"
      />
      <AboutUs />
      <Footer />
    </>
  )
}

export default About