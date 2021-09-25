import React, { useState } from 'react';
import AdmissionForm from '../AdmissionForm/AdmissionForm';


const AdmissionBooking = ({booking,date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

    return (
        <div className="col-md-4">
            <div class="card">
                <div class="card-header">
                    {booking.shift}
                </div>
                <div class="card-body">
                    <h4 class="card-title">{booking.subject}</h4>
                    <h6 class="card-text">Available seat: {booking.seat} pcs</h6>
                    <h6 class="card-text">Booking Time: {booking.bookingTime}</h6>
                    <button onClick={openModal} className="btn btn-primary">Booking Now</button>
                    <AdmissionForm modalIsOpen={modalIsOpen} admissionOn={booking.subject} closeModal={closeModal} date={date} ></AdmissionForm>
                </div>
           </div>           
        </div>
    );
};

export default AdmissionBooking;