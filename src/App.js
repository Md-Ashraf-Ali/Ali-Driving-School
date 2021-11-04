import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import About from "./Components/Home/About/About";
import Services from "./Components/Home/Services/Services";
import Testimonials from "./Components/Home/Testimonials/Testimonials";
import Blog from "./Components/Home/Blog/Blog";
import Contact from "./Components/Home/Contact/Contact";
import Enrolled from "./Components/Home/Enrolled/Enrolled";
import Footer from "./Components/Shared/Footer/Footer";
import Admission from "./Components/Admission/Admission/Admission";
import Login from "./Components/Login/Login/Login";
import {createContext, useState} from 'react';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


 export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/Admission">
              <Admission />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/testimonials">
              <Testimonials></Testimonials>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/enrolled">
              <Enrolled></Enrolled>
            </Route>
            <Route path="/footer">
              <Footer></Footer>
            </Route> 
            <Route path="/dashboard">        
            </Route> 
          </Switch>
      </Router>
    </UserContext.Provider>  
  );
}

export default App;
