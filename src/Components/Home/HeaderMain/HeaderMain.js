import React from 'react';
import Image1 from '../../../Images/car-1.jpg';
import './HeaderMain.css';





const HeaderMain = () => {
    
  return (
    <main>
        <div className="row text-center align-items-center">
            <div className="col-md-4 main-header offset-md-1">
                <h1>Helping You To Make <br />Yourself An Expert Driver</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam. Voluptatem iusto facilis rem! Culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam</p>
                <button className="btn btn-success">Get Admission</button>
            </div>
            <div className="col-md-6">
                <img src={Image1} alt="" className="image-fluid" />
            </div>
        </div>
    </main>
  );
}
export default HeaderMain;