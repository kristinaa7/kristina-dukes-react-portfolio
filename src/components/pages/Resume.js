import React from 'react';
import { FaFileDownload } from "react-icons/fa";
import { IconContext } from "react-icons";
let myResume = "/assets/images/myResume.pdf";

function Resume() {
  return (
    <section>
    <h2>Resume</h2>
    <a href={process.env.PUBLIC_URL+myResume} target="_blank" rel="noreferrer">
      <IconContext.Provider
        value={{
          size: "50px",
          color: "black",
          className: "global-class-name",
        }}
      >
        <FaFileDownload />
      </IconContext.Provider>
    </a>
    <h3>Education</h3>
    <p>Full-Stack Coding Boot Camp Completion Certificate</p>
    <h3>Skills</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Bootstrap</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>REACT</li>
      <li>MongoDB</li>
      <li>JavaScript</li>
      <li>mySQL</li>
      <li>Sequelize</li>
      <li>Rest API</li>
      <li>Git</li>
      <li>JQUERY</li>
      <li>PWA</li>
      <li>MERN</li>
    </ul>
  </section>
);
}

export default Resume;