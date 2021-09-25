import React from 'react';
import './Enrolled.css';

const Enrolled = () => {
    return (
        <section className="col-md-12 enroll-container">
            <div className="container">
                <div className="row text-center mt-4">
                    <div className="enroll-data">
                      <h5>HOW WE MAKE A DIFFERENCE</h5>
                      <h1 style={{color:'aqua',fontSize:'55px'}}>We Give Best Guidence To Each Student,<br />That’s Why We Produce   Confident & Safe Drivers</h1>
                        <div>
                            <div className="btn btn-success" style={{marginRight:'10px'}}>Get Admission</div>
                            <div className="btn btn-info">Learn More</div>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    );
};

export default Enrolled;