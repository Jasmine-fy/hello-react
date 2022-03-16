import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import Sidebar from "./Sidebar";
import HeaderBar from "./Header";

import Home from "../views/Home/Home";
import List from "../views/List/List";
import Connect from "../views/Connect/Connect";

class IndexLayout extends React.Component {
  render() {
    return (
      <Layout>
        <HeaderBar></HeaderBar>
        <Layout>
          <Sidebar></Sidebar>
          <div className="layout-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user/list" component={List} />
              <Route exact path="/user/connect" component={Connect} />
            </Switch>
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default IndexLayout;
