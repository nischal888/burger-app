import { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./App.css";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Toolbar from "./component/Navigation/Toolbar/Toolbar";
import Checkout from "./container/Checkout/Checkout";
import Orders from "./container/Orders/Orders";
import Tuts from "./component/TutorialComp/Tutorial";
import Auth from "./container/Auth/Auth";
import "antd/dist/antd.min.css";
import ErrorHandler from "./ErrorHandler/ErrorHandler";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Auth} />
        {/* <Route path="/" exact component={BurgerBuilder} /> */}
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/users" component={Tuts} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to={this.props.redirectPath} />
        </Switch>
      );
    }
    return (
      <>
        <Toolbar />
        <main className="main-body">
          {routes}
          <ErrorHandler />
        </main>
      </>
    );
  }
}
const mapStateToProps = ({ authReducer, ingredientReducer }) => {
  return {
    isAuthenticated: authReducer.Token !== null,
    redirectPath: ingredientReducer.redirectPath,
  };
};

export default withRouter(connect(mapStateToProps)(App));
