import React from 'react';
import './App.css';
import { Switch,Route, Redirect } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
const App = () =>{
  return (
        <>
          <Switch> 
              <Route exact Path="/" component={Home}/>
              <Route exact Path="/About" component={About}/>
              <Route exact Path="/Services" component={Services}/>
              <Route exact Path="/Contact" component={Contact}/>
              <Redirect to="/" />
          </Switch>
          </>
  );
}

export default App;
