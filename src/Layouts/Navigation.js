import React from "react";
import { NavLink, Route } from "react-router-dom";
class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Want</NavLink>
          </li>
          <li>
            <NavLink to="/">Sleep</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
