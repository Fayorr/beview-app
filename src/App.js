import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import ParticlesComponent from "./components/Particles";
import Overview from './components/Overview';
import Hero from "./components/Hero"
import Cryptobrands from './components/Cryptobrands';
import About from "./components/About"
import Product from './components/Product';
import Roadmaps from './components/Roadmaps';
import Contact from './components/Contact';
import Footer from "./components/Footer"

 const App = () => {
  return (
    <div>
      <ParticlesComponent />
      <Navbar />
      <Overview />
      <Hero />
      <Cryptobrands />
      <About />
      <Product />
      <Roadmaps />
      <Contact />
      <Footer />
    </div>
  )
}


export default App;