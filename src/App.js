import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <main>
            <Header />
            <Navigation />
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
