import React from 'react'
import "../styles/Product.css"

const Rewards = () => {
    return(
        <section className="fifth-section" id='product'>
            <h3>Blockchain Reward System</h3>
            <p>
                As a decentralized system users and brands are rewarded for their
                activity on the platform, depending on how the community reacts to
                the user activity. Some factors that would determine user rewards
                include;
            </p>
            <div className="btn-container">
            <div className="btn-one">
                <h3>Engagements</h3>
                <p>Reactions to a user review</p>
            </div>
            <div className="btn-two">
                <h3>Followership</h3>
                <p>Number of blockchain Followers</p>
            </div>
            <div className="btn-three">
                <h3>Beview Markets</h3>
                <p>
                Concepts like Product PR (PPR), Average Product Experience
                Rating (APRR), Average Customer Support Rating (AVCA), Product
                Innovation Level (PIL), Project Transparency Rating (PTR) etc
                would be tradable metrics on charts for brands in the Beview
                market place and users can trade them using BEVV tokens.
                </p>
            </div>
            </div>
    </section>

    )
}




export default Rewards;