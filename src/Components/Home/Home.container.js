import React, { Component } from "react";
import Home from "./Home.component";

class HomeContainer extends Component {
  state = {
    isOpenPopup: false,
  };

  containerFunctions = {
    onHandelPopup: this.onHandelPopup.bind(this),
  };

  onHandelPopup() {
    this.setState({
      openPopup: !this.state.openPopup,
    });
  }

  render() {
    return <Home {...this.state} {...this.containerFunctions} />;
  }
}

export default HomeContainer;
