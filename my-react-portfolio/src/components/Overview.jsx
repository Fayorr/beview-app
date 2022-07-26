import React from 'react';
import "../styles/Overview.css";
import "../App.css";
import Button from "./Button";

const Overview = () =>{

    return(
        <section className="first-section">
          <div className="beview">
            <h1>
              Beview is a SocialFi platform where users review crypto projects &
              products
            </h1>
            <p>
              Beview is a platform that helps crypto users share their opinions
              and reviews on crypto based products and companies. Users on
              Beview also earn BEVV Tokens as they review crypto products
            </p>
            <div className="button-container">
          
              <a href="https://beview.co/Beview_whitepaper.pdf">
                <Button text="Whitepaper" className="btn-orange" />
              </a>
              <a href="https://beview.co/Beview_deck.pdf">
                <button className="btn-wine">Pitch Deck</button> 
              </a>
  
            </div>
          </div>
          <div className="first-section-img">
            <img src="https://beview.co/left-banner.png" alt="banner" />
          </div>
        </section>
    )
}

export default Overview;