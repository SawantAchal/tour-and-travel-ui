import React from 'react'
import '../Assets/CSS/Home.css'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import img1 from '../Assets/images/image1.avif'
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero
      cName="hero"
      heroImg ={img1}
      Htitle="your journey your story"
      Htext="chose ypur favourite destination"
      btmText="travel Plan"
      url ="/travel-plan"
      btnClass="show"
     />
     <Destination />
     <Trip/>
     <Footer/>
    </>
  )
}

export default Home