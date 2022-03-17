import React from "react";
import { Input, Button } from "antd";

const users = [
  { username: "Jerry", age: 21, gender: "male" },
  { username: "Tomy", age: 22, gender: "male" },
  { username: "Lily", age: 19, gender: "female" },
  { username: "Lucy", age: 20, gender: "female" },
];

class Home extends React.Component {
  state = {
    name: "",
    value: "",
  };
  handleClick() {
    this.setState({
      value: this.state.name
    })
  }
  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <div>
        {users.map((user) => {
          return (
            <div key={user.username}>
              <div>姓名： {user.username}</div>
              <div>年龄： {user.age}</div>
              <div>性别： {user.gender}</div>
              <hr />
            </div>
          );
        })}

        <div>
          <div>{this.state.name}</div>
          <Input value={this.state.name} onChange={this.handleChange.bind(this)} />
          <Button type="primary" onClick={this.handleClick.bind(this)}>
            提交
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
