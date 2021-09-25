import React from 'react';
import Image1 from '../../../Images/car-1.jpg';
import './AdmissionHeader.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AdmissionHeader = ({handleDateChange}) => {
    
    return (
        <main className='admissionHeader-container' style={{height:'600px'}}>
            <div className="row text-center align-items-center">
                <div className="col-md-4 main-header offset-md-1">
                    <h1 style={{color:'black',textAlign:'start'}}>Admission</h1>
                        <Calendar
                        onChange={handleDateChange}
                        value={new Date()} 
                        // style={{width:'515px'}}
                        />
                </div>
                <div className="col-md-6">
                    <img src={Image1} alt="" className="image-fluid" />
                </div>
            </div>
       </main>
    );
};

export default AdmissionHeader;