import React from "react";
import {Router, Route, Switch} from "dva/router";
import Products from "./routes/Products";
import CountApp from "./routes/CountApp";

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <switch>
        <Route path="/products" exact component={Products}/>
        <Route path="/count" component={CountApp}/>
      </switch>
    </Router>
  );
}

export default RouterConfig;
