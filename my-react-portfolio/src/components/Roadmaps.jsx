import React from 'react'
import '../styles/Roadmaps.css'


const Roadmaps = () => {
    return(
        <section className="roadmaps">
                <h2>Roadmaps</h2>
                <div className="wrapper">
                    <div className="center-line"></div>
                    <div className="row row-1">
                    <section>
                        <i className="icon"></i>
                        <div className="details">
                        <span className="title"
                            >Ideation - <span className="rd-orange">Q3, 2021</span></span
                        >
                        </div>
                        <ul>
                        <li>Concept Development</li>
                        <li>Team Formation</li>
                        </ul>
                    </section>
                    </div>
                    <div className="row row-2">
                    <section>
                        <i className="icon"></i>
                        <div className="details">
                        <span className="title"
                            >Development - <span className="rd-orange">Q4, 2021</span></span
                        >
                        </div>
                        <ul>
                        <li>Website Development</li>
                        <li>Whitepaper Development</li>
                        <li>Pitch Deck Development</li>
                        <li>Technology Research</li>
                        <li>Fund raising</li>
                        </ul>
                    </section>
                    </div>
                    <div className="row row-1">
                    <section>
                        <i className="icon"></i>
                        <div className="details">
                        <span className="title"
                            >Product Development -
                            <span className="rd-orange">Q1, 2022</span></span
                        >
                        </div>
                        <ul>
                        <li>Product Development</li>
                        <li>Product Pre-launch</li>
                        <li>BEVV Token Airdrop</li>
                        </ul>
                    </section>
                    </div>
                    <div className="row row-2">
                    <section>
                        <i className="icon"></i>
                        <div className="details">
                        <span className="title"
                            >Product launch -
                            <span className="rd-orange">Q2, 2022</span></span
                        >
                        </div>
                        <ul>
                        <li>Product Launch</li>
                        <li>Crypto Influencers Onboarding</li>
                        <li>BEVV Market Place Development</li>
                        </ul>
                    </section>
                    </div>
                    <div className="row row-1">
                    <section>
                        <i className="icon"></i>
                        <div className="details">
                        <span className="title"
                            >Market Place Launch -
                            <span className="rd-orange">Q3, 2022</span></span
                        >
                        </div>
                        <ul>
                        <li>Market Place Launch</li>
                        <li>BEVV Game Development</li>
                        </ul>
                    </section>
                    </div>
                    <div className="row row-2">
                    <section>
                        <i className="icon"></i>
                        <div className="details">
                        <span className="title"
                            >Game Launch - <span className="rd-orange">Q4, 2022</span></span
                        >
                        </div>
                        <ul>
                        <li>BEVV Game Launch</li>
                        </ul>
                    </section>
                    </div>
                </div>
        </section>
    )
}


export default Roadmaps;
