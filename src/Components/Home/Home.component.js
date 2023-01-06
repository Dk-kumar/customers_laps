import React, { Component } from "react";
import Popup from "../Popup/Popup.component";
import SegmentDetailsContainer from "../SegmentDetails/SegmentDetails.container";
import "./Home.style.scss";

class Home extends Component {
  renderHeader() {
    return (
      <header className="Header">
        <p>View Audience</p>
      </header>
    );
  }

  handleButton() {
    const {onHandelPopup} = this.props
    return <button className="Save-Button" onClick={onHandelPopup}>Save segment</button>;
  }

  renderPopup() {
    const { onHandelPopup, openPopup } = this.props;

    return (
      <Popup onOpen={openPopup} onClose={onHandelPopup}>
        <SegmentDetailsContainer />
      </Popup>
    );
  }

  render() {
    return (
      <>
        {this.renderHeader()}
        {this.handleButton()}
        {this.renderPopup()}
      </>
    );
  }
}

export default Home;
