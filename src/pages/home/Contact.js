import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import LeftIcon from "../../assets/images/cta-cubes-left-3.svg";
import RightIcon from "../../assets/images/cta-cubes-right-3.svg";
import Button from "@material-ui/core/Button";
const styles = theme => ({
  index: {
    textAlign: `center`,
    padding: `150px 0`,
    position: "relative",
    marginTop: `80px`
  },
  left: {
    backgroundPosition: `center left`,
    backgroundImage: `url(${LeftIcon})`,
    left: 0,
    "@media screen and (max-width: 575px)": {
      backgroundPosition: `center left -80px`,
      left: 0,
      top: `25%`,
      height: `50%`
    }
  },
  right: {
    backgroundPosition: `center right`,
    backgroundImage: `url(${RightIcon})`,
    right: 0,
    "@media screen and (max-width: 575px)": {
      backgroundPosition: `center right -150px`,
      left: `0`,
      top: `25%`,
      height: `50%`
    }
  },
  cube: {
    position: `absolute`,
    top: 0,
    width: `100%`,
    height: `100%`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,

    "@media screen and (max-width: 991px)": {
      top: `15%`,
      height: `70%`
    },
    "@media screen and (max-width: 1199px)": {
      top: `10%`,
      height: `80%`
    }
  },
  container: {
    margin: "0 auto",
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1200
    },
    maxWidth: `100%`,
    padding: `0 20px`,
    background: "transparent",
    position: "relative"
  },
  title: {
    color: `rgb(2, 33, 68)`,
    fontSize: `2rem`,
    fontWeight: 500,
    letterSpacing: `-0.5px`,
    marginBottom: `20px`,

    textAlign: `center`,
    marginTop: `-100px`
  }
});

class Contact extends Component {
  contact = () => {
    window._MEIQIA("showPanel");
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.index}>
        <div
          className={classNames(classes.left, classes.cube, "wow slideInDown")}
        />
        <div
          className={classNames(classes.right, classes.cube, "wow slideInDown")}
        />

        <div className={classes.container}>
          <h1 className={classes.title}>巨鹿希望与您合作</h1>
          <Button
            variant="contained"
            color="secondary"
            style={{ minWidth: `150px`, minHeight: `50px`, marginTop: `50px` }}
            onClick={this.contact}
          >
            开始
          </Button>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
