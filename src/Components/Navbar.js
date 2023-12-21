// import React from 'react';
// import '../Assets/CSS/Navbar.css';
// import { Link } from 'react-router-dom';
// import { MenuItems } from './MenuItems';
// import { FaHome } from "react-icons/fa"
// import { FaInfoCircle } from "react-icons/fa";
// import { FaBriefcase } from "react-icons/fa";
// import { FaAddressBook } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";

// const Navbar = () => {
//   const getIcon = (iconName) => {
//     const icons = {
//       FaHome: <FaHome />,
//       FaInfoCircle: <FaInfoCircle />,
//       FaBriefcase: <FaBriefcase />,
//       FaAddressBook: <FaAddressBook />,
//     };

//     return icons[iconName] || null;
//   };

//   return (
//     <nav id='Navbar'>
//       <h1 id='navbar-logo'>Achal</h1>
//       <div className='menu-icons'>
//         <GiHamburgerMenu />
//         <RxCross2 />
//       </div>
//       <ul id='nav-menu'>
//         {MenuItems.map((item, index) => (
//           <li key={index}>
//             <Link to={item.url} className={item.className}>
//               {getIcon(item.icon)} {item.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <button id='btn'>Sign Up</button>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from 'react';
// import '../Assets/CSS/Navbar.css';
// import { Link } from 'react-router-dom';
// import { MenuItems } from './MenuItems';
// import { FaHome, FaInfoCircle, FaBriefcase, FaAddressBook } from 'react-icons/fa';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { RxCross2 } from 'react-icons/rx';

// const Navbar = () => {
//   const [isHamburgerVisible, setHamburgerVisible] = useState(true);

//   const toggleIcons = () => {
//     setHamburgerVisible(!isHamburgerVisible);
//   };

//   const getIcon = (iconName) => {
//     const icons = {
//       FaHome: <FaHome />,
//       FaInfoCircle: <FaInfoCircle />,
//       FaBriefcase: <FaBriefcase />,
//       FaAddressBook: <FaAddressBook />,
//     };

//     return icons[iconName] || null;
//   };

//   return (
//     <nav id='Navbar'>
//       <h1 id='navbar-logo'>Achal</h1>
//       <div className='menu-icons' onClick={toggleIcons}>
//         {isHamburgerVisible ? <GiHamburgerMenu /> : <RxCross2 />}
//       </div>
//       <ul id='nav-menu' className={isHamburgerVisible ? 'hidden' : ''}>
//         {MenuItems.map((item, index) => (
//           <li key={index}>
//             <Link to={item.url} className={item.className}>
//               {getIcon(item.icon)} {item.title}
//             </Link>
//           </li>
//         ))}
//         <button id='btn'>Sign Up</button>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import '../Assets/CSS/Navbar.css';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { FaHome, FaInfoCircle, FaBriefcase, FaAddressBook } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About';

const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const getIcon = (iconName) => {
    const icons = {
      FaHome: <FaHome />,
      FaInfoCircle: <FaInfoCircle />,
      FaBriefcase: <FaBriefcase />,
      FaAddressBook: <FaAddressBook />,
    };

    return icons[iconName] || null;
  };

  return (
    <nav id='Navbar'>
      <h1 id='navbar-logo'>Achal</h1>
      <div className='menu-icons' onClick={toggleMenu}>
        {isMenuVisible ? <RxCross2 /> : <GiHamburgerMenu />}
      </div>
      <ul id='nav-menu' className={isMenuVisible ? 'active' : ''}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className={item.className}>
              {getIcon(item.icon)} {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <button id='btn'>Sign Up</button>
    </nav>
  );
};

export default Navbar;
