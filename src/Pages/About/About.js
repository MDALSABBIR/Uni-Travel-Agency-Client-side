import React from 'react';
import Slider from '../Shared/Header/Slider';
import './About.css';
const About = () => {
    return (
        <div>
            <Slider></Slider>
            <h2 className="about-title">EXPLORING ABOUT US !!</h2>
            <div className="content">
                <div>
                    <h3>Who we are ?</h3>
                    <h2><span className="team-heading">WHY</span> <span className="team-title">CHOOSE US</span> </h2>
                    <p>Researching and organising your own holiday can be a stressful task. Let us do the work for you! By choosing us you can save both time and money. Our staff always ready to handle any unforeseen situations. Welcome to learn the world with us.
                        <br />
                        Ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.</p>
                    <br />
                    <address>
                        <h4>United State</h4>
                    </address>
                    <img className="flag" src="https://images.unsplash.com/photo-1518563077661-23ad56581d77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc3fHx0cmF2ZWxsaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div>
                    <img className="about-img" src="https://images.unsplash.com/photo-1532364158125-02d75a0f7fb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHBsYW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>

            <div>
                <h4>Why choose us</h4>
                <h2>OUR BENEFITS</h2>
                <p>We have over 30 years experience of organising worldwide travel and we have over 10 experts who have all been there and done it. We can justifiably claim that we never recommend something we haven’t actually experienced.</p>

                <li></li>
            </div>
            <h3 className="value-title mt-3 mb-3">Ask a question. Request for booking.</h3>
            <form className="form">
                <input type="text" name="" id="" placeholder="Your Name" required />
                <br />
                <input type="text" name="" id="" placeholder="Your Email" required />
                <br />
                <input type="number" name="" id="" placeholder="Enter Your Phone Number" required />
                <br />
                <input type="text" name="" id="" placeholder="You are Interestedf ? Y/N" required />
                <br />
                <textarea className="textarea" name="" id="" placeholder="How can we help you ?" cols="160" rows="10"></textarea>
                <br />
                <input className="btn" type="submit" value="Send Message" />
            </form>
        </div>

    );
};

export default About;