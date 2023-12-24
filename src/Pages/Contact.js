import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import img8 from '../Assets/images/image17.avif'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'


const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="about"
        heroImg ={img8}
        Htitle="Contact"
        // Htext="chose ypur favourite destination"
        // btmText="travel Plan"
        // url ="/travel-plan"
        // btnClass="show"
      />
      <ContactForm />
      <Footer/>
    </>
  )
}

export default Contact