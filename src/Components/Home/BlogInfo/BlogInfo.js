import React from 'react';

const BlogInfo = ({blogInfo}) => {
    return (
        <div className="col-md-4 d-flex justify-content-center BlogInfo-container">
               <div className="card m-3" style={{width:'18rem'}}>
                    <img src={blogInfo.img} className="card-img-top" alt="BlogInfoImg"/>
                    <div className="card-body">
                        <h5 className="card-title">{blogInfo.title}</h5>
                        <a className="btn btn-primary">Driving Course</a>
                    </div>
                </div>
        </div>  
    );
};

export default BlogInfo;