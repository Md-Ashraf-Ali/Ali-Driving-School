import React from 'react';
import aboutImg from '../../../Images/about.jpg';
import './About.css';
import Navbar from '../../Shared/Navbar/Navbar';
import footer from '../../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className="container text-center">
                <h5 style={{color:'darkblue'}}>LEARN TO DRIVE SAFELY</h5>
                <div className="row">
                    <div className="col-md-4">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="about-description">
                            <h1> We’re an Experienced,<br/>
                                Trustworthy, Reliable & <br/>
                                Friendly Driving School <br/>
                            </h1>
                            <p style={{marginLeft:'200px',marginTop:'20px',marginBottom:'20px'}}>Nunc quam arcu, pretium quis quam sed, laoreet efficitur liquam volutpat. lobortis sem consequat consequat imperdiet. In nulla sed viverraut loremut tetur diam nunc bibendum imperdiets. Lorem ipsum dolor sit amet, consec isicing elit eiusmod tempor incididunt labore do consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta amet qui quas facilis odit Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, cum?</p>
                            <div className="about-foot">
                                <div style={{color:'blueviolet'}}>
                                    Offering Special weekend
                                    Classes, Book Your’s Today!
                                </div>
                                <div style={{color:'GrayText'}}>PHONE: +1 (700) 333 0088</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer></footer>
        </div>
    );
};

export default About;