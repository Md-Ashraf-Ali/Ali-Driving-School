import React from 'react';
import './ServicesInfo.css';

const ServicesInfo = ({dataInfo}) => {
    return (
    <div className="col" style={{color:'black'}}>
        <div className="card h-100">
              <img className="card-img-top cardImg" src={dataInfo.titleImg}  alt="titleImg"/>
            <div className="card-body">
                <h4 className="card-title">{dataInfo.title}</h4>
                <p className="card-text">{dataInfo.description}</p>
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div className="col-md-6">
                            <div className="instructors">
                                <div className="instructorImg">
                                    <img src={dataInfo.instructorImg} alt="instructorImg" />
                                </div>
                                <div>
                                    <h5>{dataInfo.instructorName}</h5>
                                    <p>Instructor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cars">
                                <div className="instructorImg">
                                    <img src={dataInfo.carImg} alt="instructorImg" />
                                </div>
                                <div>
                                    <h5>{dataInfo.carTitle}</h5>
                                    <p>{dataInfo.drivingPrice}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                                  
                </div>
            </div>
         </div>
    </div>
    );
};

export default ServicesInfo;