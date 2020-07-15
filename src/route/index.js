import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Cookies from "js-cookie";
// import urlConfig from "./const";
import Home from "../pages/home";
import Login from "../pages/login";
import "./index.less";

class Layoutroute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        {/* {urlConfig.map(v => {
          return (
            <Route
              path={v.path}
              key={v.path}
              exact
              render={() => {
                const Component = v.component;
                return v.needLogin && !Cookies.get("SystemToken") ? (
                  <Redirect to="/login" />
                ) : (
                  <Component />
                );
              }}
            />
          );
        })} */}
      </Switch>
    );
  }
}

export default Layoutroute;
