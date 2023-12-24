import React from 'react'
import '../Assets/CSS/Footer.css'
import {FaHome}  from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
        <section className='top'>
            <div>
                <h1>Achal</h1>
                <p>choose ypur favorite destination</p>
            </div>
            <div >
                <Link to={"/"}><TiSocialFacebookCircular className='ficons'/></Link>
                <Link to={"/"}><TiSocialTwitterCircular className='ficons'/></Link>
                <Link to={"/"}><FaInstagram className='ficons' /></Link>
                <Link to={"/"}><FaHome className='ficons'/></Link>
            </div>
        </section>
        <section className='bottom'>
            <div>
                <h4>Project</h4>
                <Link>Changelog</Link>
                <Link>Status</Link>
                <Link>License</Link>
                <Link>All version</Link>
            </div>
            <div>
                <h4>Community</h4>
                <Link>Github</Link>
                <Link>Issuse</Link>
                <Link>Project</Link>
                <Link>Twitter</Link>
            </div>
            <div>
                <h4>Help</h4>
                <Link>Support</Link>
                <Link>Conatct uS</Link>
                <Link>Troubleshooting</Link>
            </div>
            <div>
                <h4>others</h4>
                <Link>terms of services</Link>
                <Link>Privacy ploicy</Link>
                <Link>License</Link>
            </div>
        </section>
    </footer>
  )
}

export default Footer