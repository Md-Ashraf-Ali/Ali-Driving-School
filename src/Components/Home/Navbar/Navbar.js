import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand  text-white" href="/home"><h1 style={{fontSize:'50px',color:'orange'}}>Ali's</h1>Driving School</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 ml-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link ms-5 text-white active" aria-current="page"  href="home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link ms-5  text-white" href="/about">About</a>
                    </li> 
                    <li className="nav-item">
                    <a className="nav-link ms-5 text-white" href="/services">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link ms-5 text-white" href="/testimonials">Testimonials</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link ms-5 text-white" href="/reviews">Reviews</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link ms-5 text-white" href="/blog">Blog</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link ms-5 text-white" href="/contact">Contact</a>
                    </li> 
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;