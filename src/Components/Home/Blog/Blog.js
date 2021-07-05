import React from 'react';
import blog1 from '../../../Images/blog1.jpg';
import blog2 from '../../../Images/blog2.jpg';
import blog3 from '../../../Images/blog3.jpg';
import blog4 from '../../../Images/blog4.jpg';
import blog5 from '../../../Images/blog5.jpg';
import blog6 from '../../../Images/blog6.jpg';
import BlogInfo from '../BlogInfo/BlogInfo';
import './Blog.css';


const blogData =[
    {
        img:blog1,
        title:'Take Driving lessons with a private tutor',
        date:'june 25 2021',
    },
    {
        img:blog2,
        title:'When You Start Learning ToDrive, It Can Be A Little Tuff',
        date:'june 25 2021',
    },
    {
        img:blog3,
        title:'Here What to Expect for Your First In-Car Driving Lesson',
        date:'june 25 2021',
    },
    {
        img:blog4,
        title:'Take Driving lessons with a private tutor',
        date:'june 25 2021',
    },
    {
        img:blog5,
        title:'When You Start Learning ToDrive, It Can Be A Little Tuff',
        date:'june 25 2021',
    },
    {
        img:blog6,
        title:'Here What to Expect for Your First In-Car Driving Lesson',
        date:'june 25 2021',
    }

] 

const Blog = () => {
    return (
        <section className="container blog-container">
            <div className="blogHeader text-white">
                <div className="blog-header text-center">
                    <h1 style ={{color:'aqua'}}>Blog</h1>
                       <hr style={{width:'80%',height:'6px',margin:'auto',marginTop:'20px',color:'aqua'}} />
                    <h3 style={{marginTop:'20px'}} >Home <span>&gt;</span> Blog</h3>
                </div>
            </div>
            <div className="row-container">
                <div className="row">
                    {
                      blogData.map(blogInfo=><BlogInfo blogInfo={blogInfo}></BlogInfo>)
                    }
                </div>
            </div>     
        </section>
    );
};

export default Blog;