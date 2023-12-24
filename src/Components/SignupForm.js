import React from 'react'
import '../Assets/CSS/ContactForm.css'

const SignupForm = () => {
  return (
    <main className='form-container'>
        <h1>Connect With Us</h1>
        <form>
            <input type='email' placeholder='Enter your mail address' />
            <input type='number' placeholder='Enter your phone number' />
            <button>Sign Up</button>
        </form>
    </main>
  )
}

export default SignupForm