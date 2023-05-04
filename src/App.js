import React from "react";
import '../src/App.css';
// import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume'; 

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Navigation/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/portfolio' element={<Portfolio/>} />
                    <Route path='/resume' element={<Resume/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
};

export default App;
