import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  index: {
    background: "#051835",
    padding: `90px 20px`,
    color: `#fff`,
    textAlign: "left"
  },
  list: {
    listStyle: `none`,
    marginLeft: `0`,
    padding: `0`
  },
  itemTitle: {
    fontWeight: 500,
    letterSpacing: `-0.5px`,
    lineHeight: `20px`,
    fontSize: `20px`,
    marginTop: `40px`
  },
  itemDesc: {
    fontWeight: 400,
    letterSpacing: `0.5px`,
    lineHeight: `20px`,
    fontSize: `15px`,
    padding: `10 0px`,
    maxWidth: `300px`,
    margin: `0 auto`,
    color: `#576777`
  },
  container: {
    margin: `0 auto`,
    maxWidth: `300px`
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.index}>
        <div className={classes.container}>
          <h5 className={classes.itemTitle}>联系我们</h5>
          <ul className={classes.list}>
            <li className={classes.itemDesc}>187-6238-9869</li>
            <li className={classes.itemDesc}>julu@julu666.com</li>
          </ul>
          <div
            style={{
              marginTop: `70px`
            }}
          >
            © 2018 Julu Inc. All rights reserved
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
