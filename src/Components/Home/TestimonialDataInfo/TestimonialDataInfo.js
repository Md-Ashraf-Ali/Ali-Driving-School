import React from 'react';
import './TestimonialDatalInfo.css';

const TestimonialDataInfo = ({dataInfo}) => {
    return (
        <div className="col-md-4"style={{maxWidth:' 540px'}}>
            <div class="card mb-3">
            <div class="row g-0 testimonialData">
               <div class="col-md-4">
                   <div className="person-intiduce">
                      <img src={dataInfo.img} class="img-fluid rounded-start" alt="dataInfo"/>
                      <div style={{backgroundColor:'gray', padding:'6px', color:"white"}}>
                       <h5 style={{marginBottom:'2px',marginTop:"8px", color:'blue'}} >{dataInfo.name}</h5>
                        <cite style={{marginBottom:'8px'}}>{dataInfo.city}</cite>
                      </div>
                        
                   </div>  
               </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{dataInfo.title}</h5>
                        <p class="card-text">{dataInfo.description}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
    );
};

export default TestimonialDataInfo;