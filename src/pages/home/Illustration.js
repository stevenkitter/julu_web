import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  index: {},
  canvas: {
    width: `100%`
  }
});

class Illustration extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.index}>
        <div className="canvas" id="animation_container">
          <canvas
            className="canvas"
            id="canvas"
            style={{
              display: `block`,
              position: `absolute`
            }}
          />
          <div
            className="canvas"
            id="dom_overlay_container"
            style={{
              pointerEvents: `none`,
              overflow: `hidden`,
              position: `absolute`,
              left: `0px`,
              top: `0px`,
              display: `block`
            }}
          />
        </div>
      </div>
    );
  }
}

Illustration.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Illustration);
