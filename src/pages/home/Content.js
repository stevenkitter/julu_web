import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import bannerSVG from "../../assets/images/homepage-banner-bg.svg";
import bodySVG from "../../assets/images/homepage-body-bg.svg";
import Grid from "@material-ui/core/Grid";
import phonePNG from "../../assets/images/business/phone.png";
import appletPNG from "../../assets/images/business/cloud_setting.png";
import webPNG from "../../assets/images/business/desktop.png";
import distributionPNG from "../../assets/images/business/distribution.png";
import cloudPNG from "../../assets/images/business/cloud.png";
import musicPNG from "../../assets/images/business/music.png";

import Illustration from "./Illustration";
const styles = theme => ({
  index: {},
  hero: {
    paddingBottom: `500px`,
    backgroundImage: `url(${bannerSVG})`,
    paddingTop: `135px`,
    minHeight: `150px`,
    backgroundPosition: `center bottom`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`
  },
  textWrap: {
    height: `200px`,
    color: theme.palette.common.white,
    maxWidth: `650px`,
    position: "relative"
  },
  imageWrap: {
    position: `absolute`,
    left: `-20px`,
    top: `380px`,
    maxWidth: `300px`,
    maxHeight: `300px`,
    [theme.breakpoints.between("sm", "md")]: {
      left: `-20px`,
      top: `200px`,
      maxWidth: `700px`,
      maxHeight: `700px`
    },
    [theme.breakpoints.up("lg")]: {
      left: `450px`,
      top: `10px`,
      maxWidth: `500px`,
      maxHeight: `500px`
    }
  },
  container: {
    margin: "0 auto",
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values.lg
    },
    width: `100%`,
    padding: `0 20px`,
    background: "transparent",
    position: "relative"
  },
  h4: {
    fontWeight: `600`,
    fontSize: `2rem`,
    letterSpacing: `-0.25px`,
    lineHeight: `1.5`,
    marginBottom: `20px`
  },
  h6: {
    fontWeight: `400`,
    letterSpacing: `0.5px`,
    lineHeight: `1.25`
  },
  btn: {
    minWidth: `200px`,
    minHeight: `50px`,
    marginTop: `70px`
  },
  body: {
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: `300px`
    },
    paddingTop: `0px`,
    marginTop: `100px`,
    background: `url(${bodySVG}) center top no-repeat`,
    backgroundSize: `cover`
  },
  business: {
    textAlign: "center"
  },
  title: {
    color: `rgb(2, 33, 68)`,
    fontSize: `44px`,
    fontWeight: 500,
    letterSpacing: `-0.5px`,
    lineHeight: `44px`,
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
  businessRow: {},
  businessItem: {
    marginTop: `70px`
  },
  itemImage: {
    width: `180px`,
    height: `180px`
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
    padding: `0 30px`
  }
});

class JLContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [
        {
          logo: phonePNG,
          name: "App开发",
          desc: `移动应用开发！包括iOS,Andriod设备，支持市场上基本所有的手机操作系统。
          移动应用适合大业务的客户，并且有一定规模的客户基数。
          因为需要客户下载应用，所有需要客户的操作量比较大，优势就是主动性强，定制化强，适合规模化的项目。`
        },
        {
          logo: webPNG,
          name: "Web开发",
          desc: `网站开发！包括门户网站、公司宣传网站、个人博客、复杂的后台管理系统等，网站根据需求支持多种功能`
        },
        {
          logo: appletPNG,
          name: "小程序开发",
          desc: `小程序开发！包括微信小程序，阿里小程序等平台。小程序功能化很强，适合需要快速实现，多种设备支持的客户。
          小程序可以在任何安装了微信的手机设备上使用，并且转发功能很便捷，宣传速度快。缺点就是依赖于微信生态，自主性差。`
        },
        {
          logo: distributionPNG,
          name: "网络爬虫",
          desc: `并发获取网络资源，根据客户需求获取所需要的网络公共资源，帮组客户最大限度的使用网络上已有的资源`
        },
        {
          logo: cloudPNG,
          name: "脚本，服务器运维",
          desc: `根据一些已经拥有服务却无法维护的客户进行服务器升级，数据库维护等基础设施的运维工作`
        },
        {
          logo: musicPNG,
          name: "定制化开发",
          desc: `满足客户需要的其他定制化功能`
        }
      ]
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.index}>
        <main>
          <div className={classes.hero}>
            <div className={classes.container}>
              <div className={classes.textWrap}>
                <Typography variant="h4" color="inherit" className={classes.h4}>
                  巨鹿科技组您业务飞升，采用全新、快速、安全的技术给您的业务保驾护航
                </Typography>
                <Typography variant="h6" color="inherit" className={classes.h6}>
                  持续维护和升级您的应用
                </Typography>
                <div className={classes.action}>
                  <Button
                    color="secondary"
                    className={classes.btn}
                    variant="contained"
                  >
                    联系我们
                  </Button>
                </div>
                <div className={classes.imageWrap}>
                  <Illustration />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.body}>
            <div>
              <div className={classes.business}>
                <section className={classes.container}>
                  <Typography
                    variant="h4"
                    color="inherit"
                    className={classes.title}
                  >
                    巨鹿的业务
                  </Typography>
                  <Typography
                    variant="h5"
                    color="inherit"
                    className={classes.subTitle}
                  >
                    覆盖各种应用领域，支持市场上的多种设备，让您的客户随时随地的使用您的业务。
                  </Typography>
                  <div className={classes.businessRow}>
                    <Grid container wrap="wrap">
                      {this.state.business.map((item, index) => (
                        <Grid item key={index} spacing={24} md={4} xs={12}>
                          <div className={classes.businessItem}>
                            <img
                              src={item.logo}
                              className={classes.itemImage}
                              alt="business logo"
                            />
                            <Typography
                              variant="h5"
                              color="inherit"
                              className={classes.itemTitle}
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              variant="h5"
                              color="inherit"
                              className={classes.itemDesc}
                            >
                              {item.desc}
                            </Typography>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                  <Button
                    color="secondary"
                    style={{
                      marginTop: `40px`,
                      minWidth: `200px`,
                      minHeight: `40px`
                    }}
                    variant="contained"
                  >
                    了解更多
                  </Button>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

JLContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JLContent);
