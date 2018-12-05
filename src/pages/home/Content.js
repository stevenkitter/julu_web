import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
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
import baseSVPNG from "../../assets/images/base_services.png";
import simplePNG from "../../assets/images/group_sm.jpg";

import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Steps from "./Steps";
import Contact from "./Contact";
import Illustration from "./Illustration";
import Brands from "./Brands";

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
    left: `450px`,
    top: `-80px`,
    maxWidth: `900px`,
    maxHeight: `900px`,
    "@media screen and (max-width: 1199px)": {
      left: `300px`,
      maxWidth: `800px`,
      maxHeight: `800px`
    },
    "@media screen and (max-width: 991px)": {
      left: `200px`,
      top: `10px`,
      maxWidth: `700px`,
      maxHeight: `700px`
    },
    "@media screen and (max-width: 737px)": {
      left: `-30px`,
      top: `200px`,
      maxWidth: `700px`,
      maxHeight: `700px`
    },
    "@media screen and (max-width: 575px)": {
      left: `-20px`,
      top: `360px`,
      maxWidth: `450px`,
      maxHeight: `450px`
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
      marginTop: `50px`
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: `0px`
    },
    paddingTop: `20px`,
    marginTop: `100px`,
    background: `url(${bodySVG}) center top no-repeat`,
    backgroundSize: `cover`
  },
  business: {
    textAlign: "center"
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
  },
  baseService: {
    marginTop: `150px`,
    position: "relative"
  },
  clips: {
    background: `#fff`,
    position: "absolute",
    top: `-100px`,
    left: `0px`,
    bottom: `0px`,
    right: `0px`,
    [theme.breakpoints.up("md")]: {
      clipPath: `polygon(0 10%, 100% 0%, 100% 90%, 0 100%)`
    }
  },
  baseServiceTextWrap: {
    padding: `0px 10px`,
    maxWidth: `600px`
  },
  detailText: {
    fontSize: `1.0625rem`,
    lineHeight: `1.375`,
    color: `#697A89`
  },
  detailUL: {
    minHeight: `165px`
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
  moreDetail = () => {
    document.getElementById("content").scrollIntoView();
  };
  contact = () => {
    window._MEIQIA("showPanel");
  };
  render() {
    const { classes, width } = this.props;
    return (
      <div className={classes.index}>
        <main>
          <div className={classes.hero}>
            <div className={classes.container}>
              <div className={classes.textWrap}>
                <Typography variant="h4" color="inherit" className={classes.h4}>
                  巨鹿科技组您业务飞升。采用全新、快速、安全的技术给您的业务保驾护航
                </Typography>
                <Typography variant="h6" color="inherit" className={classes.h6}>
                  持续维护和升级您的应用
                </Typography>
                <div className={classes.action}>
                  <Button
                    color="secondary"
                    className={classes.btn}
                    variant="contained"
                    onClick={this.moreDetail}
                  >
                    了解更多
                  </Button>
                </div>
                <div className={classes.imageWrap}>
                  <Illustration />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.body} id="content">
            <div>
              <div className={classes.business}>
                <section className={classes.container}>
                  <Typography
                    variant="h4"
                    color="inherit"
                    className={classes.title}
                  >
                    巨鹿的能为您做什么
                  </Typography>
                  <Typography
                    variant="h5"
                    color="inherit"
                    className={classes.subTitle}
                  >
                    覆盖各种应用领域，支持市场上的多种设备，让您的客户随时随地的使用您的业务。
                  </Typography>
                  <div className={classes.businessRow}>
                    <Grid container wrap="wrap" spacing={24}>
                      {this.state.business.map((item, index) => (
                        <Grid item key={index} md={4} xs={12}>
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
                </section>
              </div>
              <div className={classes.baseService}>
                <div className={classes.clips} />
                <Grid
                  container
                  spacing={16}
                  wrap={isWidthUp("sm", width) ? "wrap" : "wrap-reverse"}
                  className={classes.container}
                >
                  <Grid item md={6} sm={12}>
                    <div className={classes.baseServiceTextWrap}>
                      <h2 className={classes.title}>自由选择：没有限制</h2>
                      <p className={classes.detailText}>
                        从自由部署到托管部署，自由选择。您可以自己购买服务器自己部署，或者给我们管理运维。
                        推荐托管给我们管理，我们有分布式技术，您的所有数据接口都会被我们用分布式技术来管理部署。
                      </p>
                      <Grid container>
                        <Grid item md={6} sm={12}>
                          <h4 className={classes.itemTitle}>服务器</h4>
                          <ul
                            className={classNames(classes.detailText, {
                              [classes.detailUL]: isWidthUp("sm", width)
                            })}
                          >
                            <li>我们擅长Ubuntu,CentOS,FreeBSD服务器</li>
                            <li>采用kubernetes分布式部署技术</li>
                            <li>docker运行机制</li>
                          </ul>
                          <h4 className={classes.itemTitle}>产品</h4>
                          <ul
                            className={classNames(classes.detailText, {
                              [classes.detailUL]: isWidthUp("sm", width)
                            })}
                          >
                            <li>代码git管理，可靠安全</li>
                            <li>代码所有权归客户所有</li>
                          </ul>
                        </Grid>
                        <Grid item md={6} sm={12}>
                          <h4 className={classes.itemTitle}>数据库</h4>
                          <ul
                            className={classNames(classes.detailText, {
                              [classes.detailUL]: isWidthUp("sm", width)
                            })}
                          >
                            <li>我们擅长Mysql,PostgreSQL,TiDB等数据库技术</li>
                            <li>数据库安全可靠，屏蔽外部端口访问权限</li>
                            <li>
                              不对外开放，但可针对客户需求，导出数据库数据
                            </li>
                          </ul>
                          <h4 className={classes.itemTitle}>售后</h4>
                          <ul
                            className={classNames(classes.detailText, {
                              [classes.detailUL]: isWidthUp("sm", width)
                            })}
                          >
                            <li>上线开始，免费运维维护一年</li>
                            <li>后续根据业务量每年收取极少的维护升级费用</li>
                            <li>一次开发，终身服务</li>
                          </ul>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <div
                      style={{
                        height: `100%`,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`
                      }}
                    >
                      <img
                        style={{
                          maxWidth: `560px`,
                          width: `100%`,
                          margin: `auto 0`
                        }}
                        src={baseSVPNG}
                        alt="baseService"
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>

              <div
                className={classes.baseService}
                style={{ marginTop: `100px`, marginBottom: `80px` }}
              >
                <Grid container spacing={16}>
                  <Grid item md={6} sm={12}>
                    <div
                      style={{
                        height: `100%`,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        padding: `10px 20px`
                      }}
                    >
                      <img
                        style={{
                          maxWidth: `800px`,
                          width: `100%`,
                          margin: `auto 0`
                        }}
                        src={simplePNG}
                        alt="simplePNG"
                      />
                    </div>
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <div
                      className={classes.baseServiceTextWrap}
                      style={{ margin: `0 auto` }}
                    >
                      <h2 className={classes.title}>简化您的开发体验</h2>
                      <p className={classes.detailText}>
                        免去您大量的开发花费，您无需自己聘用任何开发者或者组建昂贵的开发团队，运维团队。
                      </p>
                      <p className={classes.detailText}>
                        您的需求就是我们的工作任务，在一个开发周期里，我们的团队就是您的团队，您的所有业务我们都会绝对认真高效的完成。
                        您只需详细的构建好业务逻辑、业务场景、消费主体等业务相关的内容，剩下的交给我们，我们竭力为您服务。
                      </p>
                      <p className={classes.detailText}>
                        任何您有的或者没有的业务，我们都会努力帮你达成。我们还支持合作模式，欢迎咨询。
                      </p>
                      <Button
                        color="secondary"
                        style={{
                          marginTop: `70px`,
                          minWidth: `200px`,
                          minHeight: `60px`
                        }}
                        variant="contained"
                        onClick={this.contact}
                      >
                        联系我们
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.steps}>
                <Steps />
              </div>
              <div className={classes.steps}>
                <Contact />
              </div>
              <div className={classes.steps}>
                <Brands />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

JLContent.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(JLContent));
