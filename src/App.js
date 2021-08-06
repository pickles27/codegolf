import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { Home } from './home/Home';
import { NavBar } from './navbar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Switch>
      <Route path="/submit">
        <div>hi</div>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
