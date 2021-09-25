import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AdmissionHeader from '../AdmissionHeader/AdmissionHeader';
import BookAdmission from '../BookAdmission/BookAdmission';
import './Admission.css';

const Admission = () => {
    const [selectDate, setSelectDate] = useState( new Date());
    const handleDateChange = date =>{
        setSelectDate(date);
    }
    return (
        <div className="admission-container">
            <Navbar></Navbar>
            <AdmissionHeader handleDateChange={handleDateChange} ></AdmissionHeader>
            <BookAdmission date= {selectDate}></BookAdmission>
            <Footer></Footer>
        </div>
    );
};

export default Admission;