import React from "react";
import PropTypes from "prop-types";

import "./DisplayBar.css";

class DisplaBar extends React.Component {
  render() {
    return (
      <div className="display-bar">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
DisplaBar.propTypes = {
  value: PropTypes.string,
};
export default DisplaBar;
