import React from "react";
import { Layout, Menu, Dropdown, Breadcrumb } from "antd";

import logo from "../assets/logo.svg";
const { Header } = Layout;

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="header-timer">
        <span>{this.state.date.toLocaleDateString()}</span>
        <br />
        <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}

class UserInfo extends React.Component {
  state = {
    visible: false,
  };

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="outLogin">退出登录</Menu.Item>
      </Menu>
    );

    return (
      <Dropdown
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <div className="ant-dropdown-link">ICON</div>
      </Dropdown>
    );
  }
}

const HeaderBar = () => {
  return (
    <Header className="header-container">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        HELLO-REACT
      </div>
      <div className="header-right">
        <Clock />
        <UserInfo />
      </div>
      {/* <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
      </Breadcrumb> */}
    </Header>
  );
};

export default HeaderBar;
