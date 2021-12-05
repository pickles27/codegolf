import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./home/Home";
import { NavBar } from "./navbar/NavBar";

function App() {
  return (
    <div>
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
