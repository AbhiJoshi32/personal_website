/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react"

import { Typography, IconButton, Container } from "@material-ui/core"

import PropTypes from "prop-types"

import { withStyles } from "@material-ui/styles"

import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import MailIcon from "@material-ui/icons/Mail"

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  iconContainer: {
    textAlign: "center",
  },
})

class ContactUs extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Container>
          <Typography variant="h2" className="sectionHeader" gutterBottom align="center">
            Get in touch
          </Typography>
          <div className={classes.iconContainer}>
            <IconButton
              href="https://www.facebook.com/profile.php?id=100011464831893"
              color="inherit"
              aria-label="social_icon"
            >
              <FacebookIcon style={{ fontSize: 32 }} />
            </IconButton>
            <IconButton
              href="https://twitter.com/abhishek_smooth"
              aria-label="social_icon"
              color="inherit"
            >
              <TwitterIcon style={{ fontSize: 32 }} />
            </IconButton>
            <IconButton
              href="linkedin.com/in/abhishek-joshi-997031120/"
              aria-label="social_icon"
              color="inherit"
            >
              <LinkedInIcon style={{ fontSize: 32 }} />
            </IconButton>
            <IconButton href="mailto:someone@example.com" color="inherit" aria-label="social_icon">
              <MailIcon style={{ fontSize: 32 }} />
            </IconButton>
          </div>
        </Container>
      </div>
    )
  }
}

ContactUs.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ContactUs)
