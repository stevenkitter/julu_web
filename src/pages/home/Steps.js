import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import step0 from "../../assets/images/step-01.png";
import step1 from "../../assets/images/step-02.png";
import step2 from "../../assets/images/step-03.png";
import step3 from "../../assets/images/step-04.png";

const styles = theme => ({
  index: {
    padding: `150px 20px`,
    textAlign: "center",
    position: "relative"
  },
  clips: {
    background: `#fff`,
    position: "absolute",
    top: `0px`,
    left: `0px`,
    bottom: `0px`,
    right: `0px`,
    [theme.breakpoints.up("md")]: {
      clipPath: `polygon(0 10%, 100% 0%, 100% 90%, 0 100%)`
    },
    zIndex: 1
  },
  content: {
    position: "relative",
    zIndex: 2
  },
  title: {
    color: `rgb(2, 33, 68)`,
    fontSize: `2rem`,
    fontWeight: 500,
    letterSpacing: `-0.5px`,
    marginBottom: `20px`,
    marginTop: `0px`,
    textAlign: `center`
  },
  subTitle: {
    fontWeight: 400,
    letterSpacing: `-0.5px`,
    lineHeight: `1.25`,
    color: `#697A89`
  },
  item: {
    marginTop: `60px`
  },
  itemTitle: {
    fontWeight: 500,
    letterSpacing: `-0.5px`,
    lineHeight: `20px`,
    fontSize: `20px`,
    color: `rgb(2, 33, 68)`,
    marginTop: `40px`
  },
  itemDesc: {
    fontWeight: 400,
    letterSpacing: `0.5px`,
    lineHeight: `20px`,
    fontSize: `15px`,
    color: `#697A89`,
    marginTop: `40px`,
    padding: `0 30px`,
    maxWidth: `300px`,
    margin: `0 auto`
  }
});

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          logo: step0,
          name: "产品咨询",
          desc:
            "通过产品咨询，产品经理会为您梳理需求提供产品解决方案以及原型设计"
        },
        {
          logo: step1,
          name: "UI设计",
          desc: "设计师根据产品特性和用户属性进行UI设计，提升产品体验"
        },
        {
          logo: step2,
          name: "产品开发",
          desc: "根据产品需求和原型，工程师进入开发阶段，规范的代码保障项目质量"
        },
        {
          logo: step3,
          name: "测试上线",
          desc: "通过内部测试和第三方专业测试及时发现修复bug，顺利部署上线"
        }
      ]
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.index}>
        <div className={classes.clips} />
        <div className={classes.content}>
          <div className={classes.header}>
            <h1 className={classes.title}>四步完成您的产品</h1>
            <p className={classes.subTitle}>
              4步服务流程，简单、快速、保质完成您的产品
            </p>
          </div>
          <div className={classes.body}>
            <Grid container>
              {this.state.steps.map((item, index) => (
                <Grid item sm={12} md={3} key={index}>
                  <div className={classes.item}>
                    <img
                      src={item.logo}
                      style={{ width: `108px` }}
                      alt="item"
                      className="wow zoomIn"
                    />
                    <h1 className={classes.itemTitle}>{item.name}</h1>
                    <p className={classes.itemDesc}>{item.desc}</p>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

Steps.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Steps);
