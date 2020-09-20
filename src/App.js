import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch ,Redirect} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';



function App() {
  return (
          <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/service" component={Service}/>
            <Redirect to="/"></Redirect>
            
            

          </Switch>
          <Footer />
          </>
  )};
export default App;
