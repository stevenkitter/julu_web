import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              巨鹿科技
            </Typography>
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
