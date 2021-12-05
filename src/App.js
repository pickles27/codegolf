import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./home/Home";
import { NavBar } from "./navbar/NavBar";
import { SubmissionPage } from "./submit/SubmissionPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/submit/:id" component={SubmissionPage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
