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
                    <Route path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/portfolio' component={Portfolio} />
                    <Route path='/resume' component={Resume} />
                    <Route path='/contact' component={Contact} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
};

export default App;
