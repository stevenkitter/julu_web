import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "./AppBar";
import Content from "./Content";
const styles = theme => ({
  index: {}
});

class Index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.index}>
        <AppBar />
        <Content />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
