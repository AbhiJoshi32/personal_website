/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react"

// import FormControlLabel from "@material-ui/core/FormControlLabel"
// import Checkbox from "@material-ui/core/Checkbox"
import Slide from "react-reveal/Slide"
import { withStyles } from "@material-ui/styles"

import { Grid, Typography } from "@material-ui/core"
import PropTypes from "prop-types"

import { withFirebase } from "./Firebase"

import ProjectCard from "./ProjectCard/ProjectCard"

const styles = (theme) => ({
  root: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(6),
    // [theme.breakpoints.down("sm")]: {
    //   padding: theme.spacing(6),
    // },
  },
  projectContainer: {
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
})

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // loading: true
      projects: [],
    }
  }

  componentDidMount() {
    // this.setState({ loading: true });

    const { firebase } = this.props
    firebase.projects().once("value", (snapshot) => {
      this.setState({
        projects: snapshot.val(),
        // loading: false,
      })
    })
  }

  componentWillUnmount() {
    const { firebase } = this.props
    firebase.projects().off()
  }

  render() {
    const { classes } = this.props
    const { projects } = this.state
    // const projCard = []
    // for (let i = 0; i < projects.length; i += 1) {

    // }

    const projectCards = projects.map((project) => {
      return (
        <Grid style={{ display: "flex" }} key={project.name} item lg={3} md={6} xs={12}>
          <ProjectCard
            name={project.name}
            shortDes={project.shortDes}
            githubLink={project.githubLink}
            tags={project.tag}
          />
        </Grid>
      )
    })

    return (
      <div className={classes.root}>
        <Slide top>
          <Typography variant="h2" className="sectionHeader" gutterBottom align="center">
            {" "}
            Projects{" "}
          </Typography>
        </Slide>
        <div className={classes.projectContainer}>
          <Grid container spacing={6}>
            {projectCards}
          </Grid>
        </div>
      </div>
    )
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
  firebase: PropTypes.object.isRequired,
}

export default withStyles(styles)(withFirebase(Project))
