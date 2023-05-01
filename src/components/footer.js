import React from 'react';
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter  } from "react-icons/fa";
// Here we are importing a CSS file as a dependency
// import '../styles/Footer.css';

function Footer() {
  return (
    <div style={{textAlign: 'center'}}>
    <footer>
    <a href="https://github.com/kristinaa7" target="_blank" rel="noreferrer">
            <IconContext.Provider
              value={{
                size: "50px",
                color: "black",
                className: "global-class-name",
              }}
            >
              <FaGithub />
            </IconContext.Provider>
          </a>
          <a href="https://www.linkedin.com/in/bettybowielu/" target="_blank" rel="noreferrer">
            <IconContext.Provider
              value={{
                size: "50px",
                color: "black",
                className: "global-class-name",
              }}
            >
              <FaLinkedin />
            </IconContext.Provider>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <IconContext.Provider
              value={{
                size: "50px",
                color: "black",
                className: "global-class-name",
              }}
            >
              <FaTwitter />
            </IconContext.Provider>
          </a>
        </footer>
        </div>
  );
}

export default Footer;