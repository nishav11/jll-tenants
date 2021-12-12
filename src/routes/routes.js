import React from "react";
import {
  BrowserRouter as Router,
  // HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from "@mui/material";
import App from "../App";
import TenantDetails from "../components/TenantDetails/tenantDetails";

function AllRoutes() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Router>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/tenant/:id">
              <TenantDetails />
            </Route>
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
}

// use HashRouter instead of Router beacause the build fails to load the pages

export default AllRoutes;
