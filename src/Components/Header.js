/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "Berkshire Swash",
    flexGrow: 1,
    marginLeft: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      fontSize: "150%",
    },
  },
  navbtn: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "60%",

      padding: "6px 4px",
    },
  },
})

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { classes } = this.props
    return (
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            AJ
          </Typography>
          <Button
            aria-label="navigtion"
            href="#aboutmeSection"
            className={classes.navbtn}
            color="inherit"
          >
            About Me
          </Button>
          <Button
            aria-label="navigtion"
            href="#skillSection"
            className={classes.navbtn}
            color="inherit"
          >
            Skills
          </Button>
          <Button
            aria-label="navigtion"
            href="#projSection"
            className={classes.navbtn}
            color="inherit"
          >
            Projects
          </Button>
          <Button
            aria-label="navigtion"
            href="#contactSection"
            className={classes.navbtn}
            color="inherit"
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
