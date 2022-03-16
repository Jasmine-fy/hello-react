import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../views/Home/Home";
import List from "../views/List/List";
import Connect from "../views/Connect/Connect";

class Index extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/list" component={List} />
        <Route exact path="/page/connect" component={Connect} />
      </Switch>
    );
  }
}

export default Index;
