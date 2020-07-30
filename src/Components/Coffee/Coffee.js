import React from "react"
import LocalCafeIcon from "@material-ui/icons/LocalCafe"
import "./Coffee.css"

export default function Coffee() {
  return (
    <div>
      <div id="wrap">
        <div className="steam" id="steam-one" />
        <div className="steam" id="steam-two" />
        <div className="steam" id="steam-three" />
        <div className="steam" id="steam-four" />
        <LocalCafeIcon style={{ fontSize: 160, color: "#795548" }} />
      </div>
    </div>
  )
}
