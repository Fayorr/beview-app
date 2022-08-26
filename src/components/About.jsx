import React from 'react'
import "../styles/About.css"
import world from "../assets/World.png"

const About = () => {
     return (
          <section className="fourth-section" id='about'>
          <div>
            <img src={world} alt="world" />
          </div>
          <div className="future" id="about">
            <h2>The Future of Cryptography is Social</h2>
            <p>
              Beview is a decentralized community of blockchain users. Beview
              fundamentally connects blockchain (brands, tokens, products,
              projects) to their (customers, holders, traders) and helps
              customers make buy or 
               sell decisions from the opinions of other
              users.
            </p>
          </div>
        </section>
     
     )}



export default About;