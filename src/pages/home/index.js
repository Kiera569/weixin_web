import React, { Component } from "react";
import { Button } from "antd";

class Home extends Component {
  btn = () => {
    const { history } = this.props;
    history.push("/login");
  };
  render() {
    return (
      <div>
        首页
        <Button onClick={this.btn}>click me </Button>
      </div>
    );
  }
}

export default Home;
