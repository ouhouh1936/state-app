import React from "react";
import Button from "./Button";
import Want from "./Screens/Want";
import Sleep from "./Screens/Sleep";
import { Route } from "react-router-dom";
import Navigation from "./Layouts/Navigation";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: 0,
    };
  }
  render() {
    return (
      <div>
        <Route path="/" component={Navigation}></Route>
        <Route path="/" component={Want}></Route>
        <Route path="/" component={Sleep}></Route>
      </div>
    );
  }
}

export default App;
