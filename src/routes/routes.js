import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

export default AllRoutes;
