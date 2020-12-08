import "./App.css";
// TODO: Digital luxe India
//* - Background Image Main
//* - Digital Luxe Logo
//* - Color palete - Metallic grey
//* - bg_image in middle of services
//* - Content - Main - Services - Packages - Service Description
//* - Images - Service Description images - customers images
//* - remove links from bottom
//  Magnific-popup
import "./assets/css/magnific-popup.css";
//  css
import "./assets/css/bootstrap.min.css";
import "./assets/css/icons.css";
import "./assets/css/style.css";

import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";

import routes from "./routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {routes.map((route, idx) => (
              <Route path={route.path} exact component={route.component} key={idx} />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
