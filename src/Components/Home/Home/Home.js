import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Services from '../Services/Services';
import RoadTest from '../RoadTest/RoadTest';
import Testimonials from '../Testimonials/Testimonials';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Enrolled from '../Enrolled/Enrolled';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <About></About>
            <Services></Services>
            <RoadTest></RoadTest>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Enrolled></Enrolled>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;