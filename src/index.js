import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main/assets/css/animate.min.css";
import "./main/assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./main/assets/css/demo.css";
import "./main/assets/css/pe-icon-7-stroke.css";

import AdminLayout from "./main/layouts/Admin";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/welcome" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
