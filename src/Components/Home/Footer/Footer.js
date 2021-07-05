import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="main-footer text-center">
            <div className="container flex-column">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4 style={{color:'blue'}}>Newsletter Signup</h4>
                        <ul className="list-unstyled" style={{listStyleType: 'star'}}>
                            <li>Integer lobortis sem consequat imperd In nulla viverra ut lorem ut<br/> dapibus con etur diam. Nun biendum diet condime sed ipsum duis<br/> temor lacinia.</li>
                            <li>Enter your email address to get latest<br/>updates and offers from us.</li>
                            
                           <input type="text" name="email" id="" style={{color:'white',height:'45px',width:'290px',backgroundColor:'#a0d3d3',margin:'20px',fontSize:'20px'}}  placeholder="ashrafulalam2276@gmail.com"/>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <h4  style={{color:'blue'}}>Our Courses</h4>
                        <ul className="list-styled" style={{listStyleType: 'square'}}>
                            <li>Learn To Drive Slowly</li>
                            <li>Courses For Adults</li>
                            <li>Lessons For Teens</li>
                            <li>Highway Driving Course</li>
                            <li>For International Drivers</li>
                            <li>Automatic Car Lessons</li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <h4  style={{color:'blue'}}>Contact Us</h4>
                        <ul className="style-unstyled">
                            <li>72 Main Drive, Calibry,<br />Florida 20304</li>
                            <li>Helpline 24/7 <br />+1 (700) 333 0088</li>
                            <li>Mon to Friday <br />9:00 am to 7:00 pm</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                       Copyright &copy;{new Date().getFullYear()}All Rights Reserved | terms of service | privacy

                    </p>
                </div>
            </div>
            
        </section>
    );
};

export default Footer;