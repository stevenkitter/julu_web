import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import brand0 from "../../assets/images/brand0.png";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";
import brand5 from "../../assets/images/brand5.png";

const styles = theme => ({
  index: {
    color: `#fff`,
    padding: `150px 20px`
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
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [
        { logo: brand0 },
        { logo: brand1 },
        { logo: brand2 },
        { logo: brand3 },
        { logo: brand4 },
        { logo: brand5 }
      ]
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.index}>
        <div className={classes.container}>
          <Grid container spacing={16} className={classes.item}>
            {this.state.brands.map((item, index) => (
              <Grid item xs={12} sm={4} md={2} key={index}>
                <img
                  style={{
                    height: index === 0 ? `30px` : `50px`,
                    margin: `0 auto`,
                    display: `block`
                  }}
                  src={item.logo}
                  alt="logo"
                  className="wow zoomIn"
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Brands);
