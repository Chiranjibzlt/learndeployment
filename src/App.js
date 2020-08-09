import React from 'react';
import './App.css';
import {  Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./contact";
import Service from "./service";

const App = () =>{
  return (
        <>
          <Switch> 
              <Route exact path="/" component={ Home } />             
              <Route exact path="/about" component={ About } />
              <Route exact path="/services" component={ Service } />
              <Route exact path="/contact" component={ Contact }  />
           </Switch>
        </>
  );
}

export default App;
