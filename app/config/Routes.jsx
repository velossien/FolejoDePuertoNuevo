import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Main from "../components/Main.jsx";

const Routes = (
  <HashRouter>
    <Route path="/" component={Main} />
  </HashRouter>
);

export default Routes;
