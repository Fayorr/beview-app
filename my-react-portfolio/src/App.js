import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import ParticlesComponent from "./components/Particles";
import Overview from './components/Overview';

 const App = () => {
  return (
    <div>
      <ParticlesComponent />
      <Navbar />
      <Overview />
    </div>
  )
}

export  default App;