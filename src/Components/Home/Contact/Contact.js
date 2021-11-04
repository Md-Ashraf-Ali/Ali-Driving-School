import React from 'react';
import './Contact.css';
import { faThumbtack,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactInfo from '../ContactInfo/ContactInfo';
import contactImg from '../../../Images/contact-img.jpg' ;


const contactDatas =[
    {
        icon:faThumbtack,
        title:'Office Address',
        address:'72 MainSail Drive, St. 12/B Calibry, Florida 25502 - USA'
    },{
        icon:faPhone,
        title:'Phone Us',
        address:'Hotline: 0800 60020 Mob: +1 (246) 333 0791'
    },{
        icon:faEnvelope,
        title:'Send Message',
        address:'learning@drivega.net support@thedomain.com'
    }
]

const Contact = () => {
    return (
        <section className='contact-container'>
            <div className="contactData-container row">
                {
                    contactDatas.map(contactData=><ContactInfo contactData={contactData}></ContactInfo>)
                }
            </div>
            <div className="container contact-form">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={contactImg} alt="contactImg" style={{width:'100%',height:'600px'}} />
                    </div>
                    <div className="col-md-6">
                        <p style={{marginTop:'6px',padding:'5px'}}>COUNTLESS BENEFITS OF DRIVEGA</p>
                        <hr style={{width:'50%',height:'5px', color:'green'}} />
                        <h1 style={{color:'blue'}} >Any Questions? Fill-In <br/>The Form & Send Today!</h1>
                        <div className="right-form">
                           <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Your name </label>
                            <input type="text" class="form-control"   id="exampleFormControlInput1" placeholder="ashraful alam"/>
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Your Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                            </div>
                            <button className="btn btn-success">Get Started</button>
                        </div> 
                    </div>
                </div>
            </div>

            
        </section>
    );
};

export default Contact;