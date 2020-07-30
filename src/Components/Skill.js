/* eslint-disable react/no-unused-state */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react"
import Slide from "react-reveal/Slide"
import { withStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import WaterBubble from "./WaterBubble/WaterBubble"

import html from "../images/html.svg"
import css from "../images/css.svg"
import react from "../images/react.svg"
import firebase from "../images/firebase.svg"
import hadoop from "../images/hadoop.svg"
import android from "../images/android.svg"
import python from "../images/python.svg"
import javascript from "../images/javascript.svg"
import spring from "../images/spring.svg"
import mongodb from "../images/mongodb.svg"
import aws from "../images/aws.svg"

const styles = (theme) => ({
  root: {
    padding: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(6),
    },
  },
  skillContainer: {
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(4),
    },
  },
})

class Skill extends Component {
  constructor(props) {
    super(props)
    this.state = { revealed: false }
  }

  render() {
    const skillBubble = []
    const imgDict = [
      { img: html, color: "#e44d26", percentage: 10 },
      { img: css, color: "#1572b6", percentage: 15 },
      { img: react, color: "#61dafb", percentage: 25 },
      { img: firebase, color: "#f57f17", percentage: 30 },
      { img: hadoop, color: "#cccc00", percentage: 60 },
      { img: javascript, color: "#e6a329", percentage: 18 },
      { img: mongodb, color: "#499d4a", percentage: 50 },
      { img: android, color: "#96c03a", percentage: 45 },
      { img: python, color: "#f9a825", percentage: 35 },
      { img: spring, color: "#77bc1f", percentage: 50 },
      { img: aws, color: "#ff9900", percentage: 60 },
    ]
    const { classes } = this.props
    const { revealed } = this.state
    for (let i = 0; i < imgDict.length; i += 1) {
      skillBubble.push(
        <Grid key={i} item xl={2} lg={3} md={4} sm={6} xs={12}>
          <WaterBubble
            suffix={i}
            revealed={revealed}
            color={imgDict[i].color}
            image={imgDict[i].img}
            percentage={imgDict[i].percentage}
          />
        </Grid>,
      )
    }
    return (
      <div className={classes.root}>
        <Slide top>
          <Typography variant="h2" className="sectionHeader" gutterBottom align="center">
            {" "}
            Skills{" "}
          </Typography>
        </Slide>
        <div className={classes.skillContainer}>
          <Grid container spacing={6}>
            {skillBubble}
          </Grid>
        </div>
      </div>
    )
  }
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Skill)
