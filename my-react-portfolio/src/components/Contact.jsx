import React from 'react'
import '../styles/Contact.css'
import support from '../assets/customer-support.png'


const Contact = () => {
    return(
        <section className="six" id="contact">
          <div className="sixth-section">
            <div className="contact-p-container">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <div className="contact-p">
                <h3>Partnerships</h3>
                <p>partnership@beview.co</p>
              </div>
            </div>
            <div className="contact-i-container">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <div className="contact-i">
                <h3>Investor</h3>

                <p>invest@beview.co</p>
              </div>
            </div>
            <div className="contact-m-container">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <div className="contact-m">
                <h3>Marketing</h3>
                <p>marketing@beview.co</p>
              </div>
            </div>
          </div>
          <img src={support} alt="customer-support" />
        </section>
    )
}

export default Contact;