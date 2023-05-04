import React from "react";
import kristina from "../../assets/images/kristina.png"

function About() {
    return (
        <section id="about" style={{textAlign: "center"}}>
            <h1>About Me</h1>
            <img id='myportrait' src={kristina} alt="myportrait" width = "240" height = "320"></img>
            <h2>  Kristina Alabastro-Dukes </h2>
            <div>
            <p> Hello! Welcome to my portfolio using React. Here you will find a few of my 
                first draft class project assignments from the University of Washington Full 
                Stack Bootcamp, a 6 month fast-track coding class. I currently work as an Operations Specialist at a 
                sustainability company, Engie Impact. I was a division 1 volleyball player at the University of South
                Alabama from 2015-2018. I graduated in 2018 with a Bachelors in mathematics and statistics with 
                a minor in finance. I was born in Toronto, Canada and first moved to the States back in 2015.  </p>
            </div>
        </section>
    )
}

export default About;