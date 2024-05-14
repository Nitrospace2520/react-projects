import React from 'react';
import '../styles/contact.css'
const Contact=()=>{
    return(
        <div className="container">
            <h1 className="heading">Contact Us</h1>
            <form  className="form">
                <input type="text" name="name" placeholder="Your Name"   className="input" required />
                <input type="email" name="email" placeholder="Your Email"  className="input" required />
                <textarea name="message" placeholder="Your Message" rows="5"  className="input" required></textarea>
                <input type="submit" value="Submit" className="submit-btn" />
            </form>
        </div>
    );
}
export default Contact;
