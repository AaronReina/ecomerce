import React from "react";
import { Switch, Route } from "react-router-dom";
import CheckOut from "./views/CheckOut";
import Main from "./views/Main";
import PageError from "./views/PageError";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/checkOut" component={CheckOut} />
        <Route exact path="/" component={Main} />
        <Route component={PageError} />
      </Switch>
    </div>
  );
}

export default App;
