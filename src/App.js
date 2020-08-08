import React from 'react';
import './App.css';
import { Switch,Route, Redirect } from "react-router-dom"
import Home from "./components/Home"
const App = () =>{
  return (
    <>
    <div>
        <>
          <Switch> 
              <Route Path="/" component={Home}/>
              <Redirect to="/" />
          </Switch>
        </>
    </div>
    </>
  );
}

export default App;
