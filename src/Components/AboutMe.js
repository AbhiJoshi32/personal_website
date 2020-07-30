/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import {
  Grid,
  Hidden,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core"

import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { blue } from "@material-ui/core/colors"

import Terminal from "./Terminal"
import Cloud from "./Cloud/Cloud"
import Coffee from "./Coffee/Coffee"

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    height: "100vh",
    minHeight: "786px",
    backgroundColor: blue[200],
    overflowX: "hidden",
    overflowY: "hidden",
    position: "relative",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      minHeight: "1080px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      minHeight: "884px",
    },
  },
  terminal_container: {
    marginTop: "10vh",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(3),
    },
  },
  info_container: {
    margin: theme.spacing(6),
    letterSpacing: ".15em",
    fontSize: "1.2em",
    lineHeight: "2em",
    [theme.breakpoints.down("lg")]: {
      letterSpacing: ".1em",
      margin: theme.spacing(2),
    },
    [theme.breakpoints.down("md")]: {
      letterSpacing: ".1em",
      margin: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      letterSpacing: ".04em",
      lineHeight: "1.7em",
      fontSize: "90%",
      // margin: 0,
    },
  },
  card_root: {
    backgroundColor: "#ffffffcc",
    // paddingTop: theme.spacing(2),
    marginTop: "5vh",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2),
    },
  },
  cloud_container: {
    top: theme.spacing(12),
    width: "100%",
    position: "absolute",
  },
  obj_container: {
    // width: "100%",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  coffee_container: {
    float: "right",
    marginTop: "-84px",
  },
})

class AboutMe extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const clouds = []
    const sizes = ["tiny", "small", "large", "normal"]
    for (let i = 1; i < 20; i += 1) {
      const duration = Math.floor(Math.random() * (250 - 100 + 1) + 100)
      const leftMargin = Math.floor(Math.random() * (95 - 14 + 1) + 14)
      const sizeIndex = Math.floor(Math.random() * (3 - 0 + 1) + 0)
      const animationDelay = Math.floor(Math.random() * (100 - 0 + 1) + 0)
      clouds.push(
        <Cloud
          duration={`${duration}s`}
          size={sizes[sizeIndex]}
          leftMargin={`${leftMargin}%`}
          animationDelay={`-${animationDelay}s`}
          key={i}
        />,
      )
    }
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.cloud_container}>{clouds}</div>
        <Grid className={classes.obj_container} container spacing={6}>
          <Grid item md={12} lg={8} xl={6}>
            <div className={classes.terminal_container}>
              <Terminal />
            </div>
          </Grid>

          <Hidden lgDown>
            <Grid item lg={2} />
          </Hidden>
          <Grid item md={12} lg={4} xl={4}>
            <div>
              <div>
                <Card raised className={classes.card_root}>
                  <CardContent>
                    <Typography align="center" variant="h5" color="inherit">
                      About Me
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      align="justify"
                      className={classes.info_container}
                    >
                      Currently I work in Barclays India, Pune as an Graduate Analyst. In addition
                      to that I am a tech enthusiast. I am always eager to learn new technologies. I
                      like building applications and face challenges that comes with it
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton
                      aria-label="social_icon"
                      href="https://www.facebook.com/profile.php?id=100011464831893"
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="social_icon" href="https://twitter.com/abhishek_smooth">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton
                      aria-label="social_icon"
                      href="linkedin.com/in/abhishek-joshi-997031120/"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </CardActions>
                </Card>
                <div className={classes.coffee_container}>
                  {" "}
                  <Coffee />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutMe)
