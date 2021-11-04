import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import img1 from '../../../Images/loginimg.jpg'
import './Login.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';



const app = initializeApp(firebaseConfig);

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        email:"",
        password:"",
        error: "",
        success: false
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleBlur= (e) =>{
       let isFromValid = true;
       if(e.target.name === "email"){
           isFromValid = /^\S+@\S+\.\S+$/.test(e.target.value);
       }
       if(e.target.name === "password"){
           isFromValid = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/.test(e.target.value); 
       } 
       if(isFromValid){
           const newUserInfo = {...user};
           newUserInfo[e.target.name] = e.target.value;
           setUser(newUserInfo);
       }
    }
    const handleSubmit = (e)=>{
        if(newUser && user.email && user.password){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const user = userCredential.user;
                const newUserInfo = {...user};
                newUserInfo.error = "";
                newUserInfo.success = true;
                setUser(newUserInfo);        
            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = "";
                setUser(newUserInfo);
            });
        }
        if(!newUser && user.email && user.password){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const user = userCredential.user;
                const newUserInfo = {...user};
                newUserInfo.error = "";
                newUserInfo.success = true;
                setUser(newUserInfo); 
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = "";
                setUser(newUserInfo);
            });
        }
        e.preventDefault();
    }
    return (
        <>
        <Container>
            <Row>
                <Col lg={4} md={6} sm={12} >

                    <Form onSubmit={handleSubmit}>
                        <input type="checkbox" name="newUser" onChange={()=>setNewUser(!newUser)}  />
                        <label htmlFor="newUser">New User Sign Up</label>
                        {newUser && <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" onBlur={handleBlur} name="name" placeholder="Enter name"  required/>
                        </Form.Group>}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onBlur={handleBlur} name="email" placeholder="Enter email"  required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant="primary" type="submit" value="submit">{newUser?"sign Up":"Login"}</Button>
                    </Form>   
                    <p style={{color:'red'}}>{user.error}</p> 
                    {user.success && <p style={{color:'green'}}> user {newUser?"created":"loggedIn"} successfully</p>}          
                </Col>
                <Col lg={8} md={6} sm={12}>
                    <img src={img1} alt="ima1" />
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Login;