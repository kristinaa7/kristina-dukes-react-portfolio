import React from 'react';
import {Link, useLocation} from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable 
function NavTabs() {
  let Location = useLocation
  console.log(Location.pathName)
  return (
    <div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={Location === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/about"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={Location === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
          </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/portfolio"
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={Location === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
          </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/resume"
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={Location === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
          </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={Location === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
          </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
