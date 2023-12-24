import React from 'react'
import '../Assets/CSS/Hero.css'
import { Link } from 'react-router-dom'

const Hero = (props) => {
  return (
    <>
        <section className={props.cName}>
            <img alt='main img' src={props.heroImg}/>
            <div className='hero-text'>
                <h1>{props.Htitle}</h1>
                <p>{props.Htext}</p>
                <Link className={props.btnClass} to={props.url}>{props.btmText}</Link>
            </div>
        </section>
    </>
  )
}

export default Hero