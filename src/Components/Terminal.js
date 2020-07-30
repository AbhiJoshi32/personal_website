import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles"
import Typewriter from "typewriter-effect"

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    // margin: theme.spacing(2),
  },
  terminal_bar: {
    backgroundColor: "#eae8e9",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    display: "flex",
    position: "relative",
    backgroundImage: "linear-gradient(180deg, #464248 0%, #3b383d 100%)",
    borderBottom: "1px solid rgba(66, 66, 66, 0.5)",
  },
  icon_btn: {
    borderRadius: "50%",
    marginTop: "7px",
    height: "15px",
    width: "15px",
    marginBottom: "0.5rem",
    marginLeft: "0.6rem",
  },
  close: { backgroundColor: "#fa615c", marginLeft: "0.6rem" },
  max: { backgroundColor: "#3fc950" },
  min: { backgroundColor: "#ffbd48" },

  terminal_window: {
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    height: "40vh",
    minHeight: "256px",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "#FFB74D",
    backgroundColor: "#FFF",
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
    // fontSize: "5rem",

    letterSpacing: ".15em",
    fontSize: "350%",

    fontWeight: "bolder",
    // color: "#FAFAFA",
    [theme.breakpoints.down("md")]: {
      height: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "130px",
      fontSize: "180%",
      minHeight: "150px",
    },
  },
  window_text: {},
})

class Terminal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.terminal_bar}>
          <div className={`${classes.icon_btn} ${classes.close}`} />
          <div className={`${classes.icon_btn} ${classes.max}`} />
          <div className={`${classes.icon_btn} ${classes.min}`} />
        </div>
        <div className={classes.terminal_window}>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi! I'm Abhishek")
                .pauseFor(1500)
                .deleteAll()
                .pauseFor(500)
                .typeString("I'm a Developer")
                .pauseFor(1500)
                .deleteChars(11)
                .pauseFor(500)
                .typeString("Inquisitive")
                .pauseFor(1500)
                .deleteChars(11)
                .pauseFor(500)
                .typeString("a quick learner")
                .pauseFor(1500)
                .deleteAll()
                .pauseFor(500)
                .start()
            }}
          />
        </div>
      </div>
    )
  }
}

Terminal.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    terminal_bar: PropTypes.string,
    icon_btn: PropTypes.string,
    close: PropTypes.string,
    max: PropTypes.string,
    min: PropTypes.string,
    terminal_window: PropTypes.string,
    window_text: PropTypes.string,
  }),
}

Terminal.defaultProps = {
  classes: {},
}

export default withStyles(styles)(Terminal)
