import React from "react";
import { NavLink } from "react-router-dom";

import { Menu, Layout } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;

const menuConfig = [
  {
    title: "首页",
    key: "/",
    icon: "home",
  },
  {
    title: "用户",
    key: "/user",
    icon: "user",
    children: [
      {
        title: "联系",
        key: "/user/connect",
      },
      {
        title: "用户列表",
        key: "/user/list",
      },
    ],
  },
];

class Sidebar extends React.Component {
  state = {
    collapsed: false,
    menuList: [],
    defaultOpenKeys: [], //默认展开
    defaultSelectedKeys: ["/"], //默认选中
  };

  componentWillMount() {
    const menuList = this.setMenu(menuConfig);
    this.setState({
      menuList,
    });
  }

  setMenu = (menu, pItem) => {
    return menu.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={<span>{item.title}</span>}>
            {this.setMenu(item.children, item)}
          </SubMenu>
        );
      }

      return (
        <Menu.Item title={item.title} key={item.key} pitem={pItem}>
          <NavLink to={item.key}>
            <span>{item.title}</span>
          </NavLink>
        </Menu.Item>
      );
    });
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    let name;
    if (!this.state.collapsed) {
      name = <span className="name">HELLO MY REACT</span>;
    }

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo">{name}</div>

        <Menu
          theme="dark"
          defaultOpenKeys={this.state.defaultOpenKeys}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          mode="inline"
        >
          {this.state.menuList}
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
