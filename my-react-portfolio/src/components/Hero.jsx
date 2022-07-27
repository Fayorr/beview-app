import React from 'react'
import "../styles/Hero.css"


const Hero = () => {
    return (
        <section className="hero">
            <div className="second-section">
                <h3>Review Everything Crypto</h3>
                <p>
                    Share your feedback on projects, blockchains, tokens, exchanges,
                    wallets, NFTs, Games and every category of crypto product on Beview
                </p>
            </div>



            <div class="c-brand-container">
                <img
                src="https://beview.co/assets/img/icon/secure.png"
                alt="icon"
                />
                <div class="c-brand">
                    <h4>For Crypto Brands</h4>
                    <p>
                        Crypto brands and project owners can use Beview to get user
                        feedback for their projects and make ammendments to suite their
                        community. Crypto Brands and Projects would be able to create
                        polls, campaigns, view user reviews of their products, see their
                        product rating on Beview. As a Decentralized platform, Beview
                        uses the blockchain technology to ensure all functions are
                        thoroughly decentralized and cannot be manipulated
                    </p>
                </div>
          </div>
          <div class="c-users-container">
            <img
              src="https://beview.co/assets/img/icon/insurance.png"
              alt="insurance-icon"
            />
            <div class="c-users">
              <h4>For Crypto Users</h4>
              <p>
                Review blockchains, exchanges, tokens, NFTs, Games etc and earn
                BEVV tokens in the process when your review gets a lot of
                traction and upvotes. For Crypto users, Beview helps them know
                what other users in the crypto community think about a
                particular crypto product or service. It is an information pool
                for crypto related data and a financial tool for Beviewers who
                achieve certain levels of popularity on the platform
              </p>
            </div>
          </div>


        </section>

        // console.log('heero')
    );

}


export default Hero;