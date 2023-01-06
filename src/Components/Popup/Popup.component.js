import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Popup.style.scss";

class Popup extends Component {
  state = {};
  render() {
    const { children, onOpen } = this.props;
    
    if (!onOpen) return null;
    return ReactDOM.createPortal(
      <>
        <div className="popup-container">
          <div className="popup">
            <div className="popup-content">{children}</div>
          </div>
        </div>
      </>,
      document.getElementById("popup")
    );
  }
}

export default Popup;
