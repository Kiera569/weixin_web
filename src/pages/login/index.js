import React, { Component } from "react";
import { Button } from "antd";

class Login extends Component {
  btn = () => {
    const { history } = this.props;
    history.push("/");
  };
  render() {
    return (
      <div>
        登录
        <Button type="primary" onClick={this.btn}>
          点击我
        </Button>
      </div>
    );
  }
}

export default Login;
