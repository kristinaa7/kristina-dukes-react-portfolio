import React from "react";
import '../src/App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
    return (
        <div>
    <Header/>
     <PortfolioContainer />
     <Footer/> 
     </div>
     )
     };

export default App;
