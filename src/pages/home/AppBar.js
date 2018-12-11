import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../../assets/images/logo_nav.svg";
const styles = theme => ({
  index: {
    position: "absolute",
    top: `0`,
    width: `100%`
  },
  appBar: {
    margin: "0 auto",
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values.lg
    },
    width: `100%`,
    padding: `0 20px`,
    background: "transparent",
    color: theme.palette.common.white
  },
  toolBar: {
    minHeight: `90px`
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  }
});

class JLAppBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.index}>
        <AppBar className={classes.appBar} position="static" elevation={0}>
          <Toolbar className={classes.toolBar}>
            <img
              style={{
                width: `150px`
              }}
              src={Logo}
              alt="logo"
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

JLAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JLAppBar);
