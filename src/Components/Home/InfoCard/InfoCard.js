import React from 'react';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
         <div className="col-md-3 infoCard-container d-flex justify-content-center align-items-end">
                <div class="card mt-100" style={{width: '18rem'}}>
                    <img src={info.img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h4>{info.title}</h4>
                        <p class="card-text">{info.description}</p>
                    </div>
                </div>
           </div>
    );
};

export default InfoCard;