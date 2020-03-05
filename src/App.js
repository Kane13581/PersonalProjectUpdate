import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Contacts from "./Components/contacts";
import Hobbies from "./Components/Hobbies";



export default function App() {
  return (
    <Router>
      <div class="container-fluid">
        <div class="row ">

          <div class="col-sm-6 col-lg-6">
            <Link to="/" className="HomeButtonStyle" >Home</Link>
          </div>

          <div class="col-sm-2 col-lg-2">
            <Link to="/about" className="AboutButtonStyle">About</Link>
          </div>

          <div class="col-sm-2 col-lg-2">
            <Link to="/Hobbies" className="HobbiesButtonStyle">Hobbies</Link>
          </div>

          <div class="col-sm-2 col-lg-2">
            <Link to="/contacts" className="ContactsButtonStyle">Contact</Link>
          </div>
        </div>
      </div>


      <div className="BigPicture">
        <div className="PageContents">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/hobbies">
              <Hobbies />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

