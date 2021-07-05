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
import Footer from "./Components/Home/Footer/Footer";

function App() {
  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
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
  );
}

export default App;
