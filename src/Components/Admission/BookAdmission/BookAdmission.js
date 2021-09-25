import React from 'react';
import AdmissionBooking from '../AdmissionBooking/AdmissionBooking';
const bookingData =[
    {
        seat:'50',
        subject:'Highway Driving Lessons',
        shift:'Morning Shift',
        bookingTime :'9.0am-10.0am'
    },
    {
        seat:'60',
        subject:'Automatic Car Lessons',
        shift:'Day Shift',
        bookingTime :'2.0pm-3.0pm'
    },
    {
        seat:'80',
        subject:'For International Drivers',
        shift:'Night Shift',
        bookingTime :'9.0pm-10.0pm'
    }
]

const BookAdmission = ({date}) => {
    return (
        <section style={{height:'400px', backgroundColor:'darkgray',marginBottom:'80px',}}>
            <h3 className="text-center pt-5">Available booking admission on {date.toDateString()} </h3>
            <div className="row mt-5">
                {
                    bookingData.map(booking=><AdmissionBooking date={date} booking={booking}></AdmissionBooking>)
                }
            </div>
        </section>
    );
};

export default BookAdmission;