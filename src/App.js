import React from 'react';
import './App.css';
import {  Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./contact";
import Service from "./service";

const App = () =>{
  return (
        <>
          <Switch> 
            
              <Route exact Path="/" component={ Home }></Route>
              <Route exact Path="/about" component={ About }> </Route>
              <Route exact Path="/services" component={ Service }></Route> 
              <Route exact Path="/contact" component={ Contact } > </Route>
           </Switch>
        </>
  );
}

export default App;
