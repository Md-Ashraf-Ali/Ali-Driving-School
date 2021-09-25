import React from 'react';
import loginImg from '../../../Images/loginimg.jpg';
import './Login.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'



const Login = () => {
    return (
        <section className="login-container container">
            <div className="row">
                <div className=" d-flex justify-content-center">
                    <div className="col-md-6" >
                        <div className="loginForm">
                            <Card style={{height:'450px',width:'auto'}}>
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center',color:'blue' }}> USER LOGIN</Card.Title>
                                    <hr style={{height:'5px',width:'50%',color:'green',margin:'0 auto',marginBottom:'25px'}} />
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter your email" required/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter your Password"  required/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicSubmit">
                                            <Button type="submit" className="formButton">
                                                Submit
                                            </Button>
                                        </Form.Group>     
                                </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="loginImg img-fluid">
                            <img src={loginImg} alt="loginPIC" />
                        </div>
                    </div>

                </div>
                
            </div>
                
        </section>
    );
};

export default Login;