import React, { useState } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"

import Fade from "react-reveal/Fade"
import "./WaterBubble.css"

const useStyles = makeStyles({
  circle: {
    boxShadow: (props) => `0 0 8px 8px ${props.color}`,
  },
  wave: {
    background: (props) => props.color,
    opacity: "0.5",
  },
  bgimg: {
    backgroundImage: (props) => `url(${props.image})`,
  },
  wave_up: {
    animationPlayState: "running",
    // top: "250px",
  },
  wave_flow: {
    top: (props) => props.percentage,
    animation: "wave_animate 15s linear infinite",
    animationDelay: "500ms",
  },
})

export default function WaterBubble({ color, image, percentage, suffix }) {
  const classes = useStyles({ color, image, percentage, suffix })
  const keyframes = `@-webkit-keyframes wave_up${suffix} {
      0% { 
         top: 105%
      }
      100% {
        top: ${percentage}%
      }      
  }`

  const styleSheet = document.styleSheets[0]
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length)

  const [waveAnimation, setWaveAnimation] = useState("")
  let bubbleStyle = {}
  if (waveAnimation === "up") {
    bubbleStyle = {
      // animationPlayState: flowState,
      animationName: `wave_up${suffix}`,
      animationDuration: "5s",
      animationDelay: "500ms",
      animationIterationCount: 1,
      animationFillMode: "forwards",
      // top: `${percentage}px`,
    }
  } else if (waveAnimation === "flow") {
    bubbleStyle = {
      animationName: "wave_animate",
      animationDuration: "8s",
      animationDelay: "100ms",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      top: `${percentage}%`,
    }
  } else {
    bubbleStyle = {}
  }
  // const [flowState, setFlowState] = useState("paused")
  const calcPercentage = Math.floor(((percentage - 105) * 100) / (0 - 105))
  function onAnimationEnd() {
    // setFlowState("")
    setWaveAnimation("flow")
  }
  return (
    <Fade duration={1000} onReveal={() => setWaveAnimation("up")}>
      <div className={`circle ${classes.circle}`}>
        <div className={`bgimg ${classes.bgimg}`} />
        <div
          onAnimationEnd={onAnimationEnd}
          className={`${classes.wave} wave`}
          style={bubbleStyle}
        />

        <div className="perc_style">{calcPercentage}%</div>
      </div>
    </Fade>
  )
}

WaterBubble.propTypes = {
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  suffix: PropTypes.number.isRequired,
}
