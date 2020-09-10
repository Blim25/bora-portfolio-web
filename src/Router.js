import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "src/pages/Main";
import CenterLayout from "src/layouts/CenterLayout";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="*">
            <CenterLayout>
              <h1>404 NOT FOUND</h1>
            </CenterLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
