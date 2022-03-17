import React from "react";
import { Form, Input, Button, message } from "antd";
import PropTypes from "prop-types";

class CommentInput extends React.Component {
  state = {
    username: "",
    content: "",
  };
  handleSubmit = () => {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content });
    }
    this.setState({ content: "" });
  };
  render() {
    return (
      <Form>
        <Form.Item label="用户名" name="name">
          <Input
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="评论内容" name="content">
          <Input
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 18, span: 6 }}>
          <Button type="primary" onClick={this.handleSubmit}>
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

class CommentList extends React.Component {
  static defaultProps = {
    comments: [],
  };
  static propTypes = {
    comments: PropTypes.array.isRequired,
  };
  render() {
    const { comments } = this.props;
    return (
      <div>
        {comments.map((comment, i) => {
          return (
            <div key={i}>
              {comment.username}： {comment.content}
            </div>
          );
        })}
      </div>
    );
  }
}

class CommentApp extends React.Component {
  state = {
    comments: [],
  };
  handleSubmit = (commit) => {
    if (!commit) return;
    if (!commit.username) {
      message.error("请输入username");
      return;
    }
    if (!commit.content) {
      message.error("请输入content");
      return;
    }

    this.state.comments.push(commit);
    this.setState({
      comments: this.state.comments,
    });
  };
  render() {
    return (
      <div className="comment-wrapper">
        <CommentInput onSubmit={this.handleSubmit} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentApp;
