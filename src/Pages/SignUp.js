import React from 'react'
import Navbar from '../Components/Navbar'
import SignupForm from '../Components/SignupForm'
import Hero from '../Components/Hero'
import sign from '../Assets/images/image18.avif'

const SignUp = () => {
  return (
    <div>
        <Navbar/>
        <Hero
        cName ="about"
        heroImg ={sign}
        Htitle="Sign Up"
        />
        <SignupForm />
    </div>
  )
}

export default SignUp