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
        <Route path="/want" component={Want}></Route>
        <Route path="/sleep" component={Sleep}></Route>

    <h1>{this.state.changeValue}</h1>
    <Button name={`INCREMENT`} action={this._increment} />
    <Button name={`DECREMENT`} action={this._decrement} />
      </div>

    );
  }

  _increment = () => {
    this.setState((prevState) => {
        return{ changeValue: prevState.changeValue + 1};
    });
  };
  
  _decrement = () => {
    this.setState((prevState) => {
      return { changeValue: prevState.changeValue -1};
    });
  };

}



export default App;
