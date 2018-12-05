import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Home from "./home/Index";
import "animate.css";
import WOW from "wowjs";
const styles = theme => ({
  index: {}
});

class Index extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.index}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
Index.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Index);
