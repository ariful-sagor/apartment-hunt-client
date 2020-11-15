import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import NotFound from './Components/NotFound/NotFound';




export const UserContext= createContext();

function App() {

  const [loggedInUser, setLoggedInUser]= useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;