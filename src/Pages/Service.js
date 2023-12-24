import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import img7 from '../Assets/images/image14.avif'
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'


const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="about"
        heroImg ={img7}
        Htitle="Services"
        // Htext="chose ypur favourite destination"
        // btmText="travel Plan"
        // url ="/travel-plan"
        // btnClass="show"
      />
      <Trip/>
      <Footer />
    </>
  )
}

export default Service