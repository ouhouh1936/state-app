import React from "react";
import { NavLink, Route } from "react-router-dom";
class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/want">Want</NavLink>
          </li>
          <li>
            <NavLink to="/sleep">Sleep</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
