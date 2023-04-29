import React from "react";
let kristina = "/assets/images/kristina.png";

function About() {
    return (
        <section id="about">
            <h1>About Me</h1>
            <img id='myportrait' src={kristina} alt="myportrait" width = "240" height = "320"></img>
            <h2>  Kristina Alabastro-Dukes </h2>
            <div>
            <p> Hello! Welcome to my portfolio. I am currently enrolled 
                at the University of Washington Full Stack Bootcamp. 
                I currently work as an Operations Specialist at a 
                sustainability company. </p>
                <a href="#contact"> Contact Information </a>
                <a href="#projects"> See My Past Work </a>
            </div>
        </section>
    )
}

export default About;