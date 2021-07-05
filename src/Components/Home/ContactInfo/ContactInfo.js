import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ContactInfo.css';



const ContactInfo = ({contactData}) => {
    return (
        <div className="col-md-4 text-center justify-content-evenly" style={{backgroundColor:'darkGray'}}>
            <FontAwesomeIcon style={{color:'green', fontSize:'60px', margin:'15px'}} icon={contactData.icon} />
            <h4>{contactData.title}</h4>
            <address style={{color:'blue'}}>{contactData.address}</address>
        </div>
    );
};

export default ContactInfo;