import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import ParticlesComponent from "./components/Particles";
import Overview from './components/Overview';
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from "./components/Footer"

 const App = () => {
  return (
    <div>
      <ParticlesComponent />
      <Navbar />
      <Overview />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export  default App;