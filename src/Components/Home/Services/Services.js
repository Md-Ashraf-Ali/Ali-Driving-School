import React from 'react';
import titleImg1 from '../../../Images/titleImg1.jpg';
import titleImg2 from '../../../Images/titleImg2.jpg';
import titleImg3 from '../../../Images/titleImg3.jpg';
import driverImg from '../../../Images/driver1.jpg';
import carImg from '../../../Images/car.jpg';
import ServicesInfo from '../ServicesInfo/ServicesInfo';
import './Services.css';


const servicesData=[
    {
        titleImg:titleImg1,
        title:'Highway Driving Lessons',
        description:'Sunt culpa qui officia desl mollit anim est laborum. Sed perspiciatis un omnisiste natus error sit voluptatem.',
        instructorImg:driverImg,
        instructorName:'jection',
        carImg:carImg,
        carTitle:'Start from',
        drivingPrice:'$45-$175',
    },
    {
        titleImg:titleImg2,
        title:'Automatic Car Lessons',
        description:'Sunt culpa qui officia desl mollit anim est laborum. Sed perspiciatis un omnis iste natus error sit voluptatem.',
        instructorImg:driverImg,
        instructorName:'maikel jeek',
        carImg:carImg,
        carTitle:'Start from',
        drivingPrice:'$85-$195',
    },
    {
        titleImg:titleImg3,
        title:'For International Drivers',
        description:'Sunt culpa qui officia desl mollit anim est laborum. Sed perspiciatis un omnis iste natus error sit voluptatem.',
        instructorImg:driverImg,
        instructorName:'jonathon',
        carImg:carImg,
        carTitle:'Start from',
        drivingPrice:'$120-$235',
    },
]

const Services = () => {
    return (
        <section className="services-container">
            <h4 style={{paddingTop:'30px'}}>INSTRUCTORS HELP YOU SUCCEED</h4>
            <br /> <br /> <br />
            <div className="services-header">
                <div className="row">
                    <div className="col-md-6">
                      <div className="left-sideHeader">
                          <h1>Our Educational Driving <br />Courses For All Ages</h1>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="right-sideHeader">
                          <p style={{padding:'10px',margin:'0 20px'}}>
                             Our training courses help people of all ages to acquire <br />
                                licensed the experience aute irure dolor incly reprehend <br />
                                 erit cepteur sint cat cupidatat non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas impedit eligendi beatae iure illo? Voluptate quas impedit eligendi beatae iure illo?
                          </p>
                      </div>
                    </div>
                </div>
            </div>
            <div className="container info-container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                    servicesData.map(dataInfo =><ServicesInfo dataInfo={dataInfo}></ServicesInfo>)  
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;