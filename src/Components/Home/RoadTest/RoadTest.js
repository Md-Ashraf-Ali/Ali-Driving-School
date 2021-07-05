import React from 'react';
import './RoadTest.css';

const RoadTest = () => {
    return (
        <section className="roadTest-container position-relative">
            <div className="roadContent position-absolute top-50 start-50 translate-middle">
               <h1 style={{marginTop:'30px',marginBottom:'40px'}}>Drivega Helps Clients To Pass Test <br />Earn a License On The First Try </h1>
               <p>Get your <a href="/free lesson">FREE Lesson</a>before a road test!</p>
            </div>
        </section>
    );
};

export default RoadTest;