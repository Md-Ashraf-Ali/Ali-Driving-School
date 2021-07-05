import React from 'react';
import jonson from '../../../Images/jonson.jpg';
import mykel from '../../../Images/mykel.jpg';
import thomas from '../../../Images/thomas.jpg';
import './Testimonials.css';
import TestimonialDataInfo from '../TestimonialDataInfo/TestimonialDataInfo';
const testimonialData =[
    {
        img:jonson,
        name:'james jonson',
        city:'california usa',
        title:'*Earned Driving license*',
        description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos inventore, aliquid ex, excepturi commodi porro impedit nam amet nihil optio sit corporis laborum! Quam quos odit fugit inventore amet nesciunt velit explicabo ipsa autem similique! Consectetur cupiditate ipsa, provident laboriosam reiciendis quam culpa atque. Ex impedit dicta modi temporibus minima!'
        
    },
    {
        img:mykel, 
        name:'mikel junk',
        city:'newjercy usa',
        title:'*Earned Driving license*',
        description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos inventore, aliquid ex, excepturi commodi porro impedit nam amet nihil optio sit corporis laborum! Quam quos odit fugit inventore amet nesciunt velit explicabo ipsa autem similique! Consectetur cupiditate ipsa, provident laboriosam reiciendis quam culpa atque. Ex impedit dicta modi temporibus minima!'
        
    },
    {
         
        img:thomas,
        name:'alva thomas',
        city:'florida usa',
        title:'*Earned Driving license*',
        description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos inventore, aliquid ex, excepturi commodi porro impedit nam amet nihil optio sit corporis laborum! Quam quos odit fugit inventore amet nesciunt velit explicabo ipsa autem similique! Consectetur cupiditate ipsa, provident laboriosam reiciendis quam culpa atque. Ex impedit dicta modi temporibus minima!'


    }

]


const Testimonials = () => {
    return (
        <section className="container testimonial-container">
            <div className="testHeader text-center">
                <h5 style={{color:'white', paddingTop:'25px' }}>WHAT OUR CLIENTS ARE SAYING</h5> 
                  <hr style={{width:'50%', margin:'auto', color:'blue', height:'10px'}} />
                <h1 style={{color:'blue',margin:'15px'}}>Customer Testimonials</h1>
                <p style={{padding:'60px', color:'white'}}>Aute irure dolor reprehenderit cepteur sint ocaecat cupidatate
                sed ipsum non proident int sunt indys culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui numquam enim cum sapiente veritatis at consequatur suscipit accusamus placeat, vel illo dignissimos obcaecati alias nulla quam aspernatur dolor molestiae perferendis exercitationem sequi est quas? Perspiciatis, maiores possimus illum, repellat minima sit perferendis hic eveniet ullam numquam corrupti exercitationem rem?perferendis exercitationem sequi est quas? Perspiciatis, maiores possimus illum, repellat minima sit perferendis hic eveniet ullam numquam corrupti exercitationem rem? </p>
            </div>   
            <div className="row">
                {
                    testimonialData.map(dataInfo=><TestimonialDataInfo dataInfo={dataInfo}></TestimonialDataInfo>)
                }
            </div>
        </section>
    );
};

export default Testimonials;