/* eslint-disable react/no-unused-prop-types */
import React from "react"
import PropTypes from "prop-types"

import { makeStyles } from "@material-ui/core/styles"
import "./Cloud.css"

const useStyles = makeStyles({
  root: {
    animationDuration: (props) => props.duration,
    // marginLeft: (props) => props.leftMargin,
    marginLeft: "80%",
    animationDelay: (props) => props.animationDelay,
  },
})
export default function Cloud(props) {
  const { size } = props
  const classes = useStyles(props)
  return (
    <div className={`${size} cloud ${classes.root}`}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

Cloud.propTypes = {
  duration: PropTypes.string.isRequired,
  leftMargin: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "normal", "large", "tiny"]).isRequired,
  animationDelay: PropTypes.string.isRequired,
}
