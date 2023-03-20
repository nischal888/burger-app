import "./NavigationItem.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutInitiate } from "../../../store/actions/";
const navigationItem = (props) => {
  return (
    <ul className="NavigationItem">
      <li className="NavItem">
        <NavLink to="/" exact>
          Burger Builder
        </NavLink>
        {props.isAuthenticated ? (
          <>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/users">Users</NavLink>
          </>
        ) : null}

        <NavLink
          to="/authenticate"
          onClick={props.isAuthenticated ? props.logoutInitiate : null}
        >
          {props.isAuthenticated ? "Logout" : "Login"}
        </NavLink>
      </li>
    </ul>
  );
};
const mapStateToProps = ({ authReducer }) => {
  return {
    isAuthenticated: authReducer.Token != null,
  };
};
const mapDispatchToProps = {
  logoutInitiate,
};

export default connect(mapStateToProps, mapDispatchToProps)(navigationItem);
