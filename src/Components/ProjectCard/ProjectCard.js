/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import Typography from "@material-ui/core/Typography"

import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"

import { Zoom } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import { withFirebase } from "../Firebase"
import "./ProjectCard.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    // padding: "8px",
  },
  media: {
    // height: 0,
    // paddingTop: "75%",
    backgroundSize: "contain",
    backgroundColor: "#d2d2d2",
    position: "relative",
  },
  imgContainer: {
    height: "100%",
    textAlign: "center",
  },
  cardHeader: {
    color: `${theme.palette.primary.contrastText}`,
    letterSpacing: "0.15em",
    fontSize: "150%",
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "16px",
    paddingBottom: "8px",
    marginTop: "16px",
    backgroundColor: `${theme.palette.primary.main}`,
    boxShadow: `${theme.palette.primary.dark} -1px -4px 4px 1px`,
  },
  content: {
    fontSize: "120%",
    letterSpacing: "0.006em",
    lineHeight: "1.8",
    [theme.breakpoints.down("sm")]: {
      // font-size: 120%;
      lineHeight: "initial",
      letterSpacing: "0.006em",
    },
  },
}))
function ProjectCard({ shortDes, name, githubLink, firebase, tags }) {
  const classes = useStyles()
  const imageListLocal = `${name}ImageList`
  const [imageList, setImageList] = useState([])
  const [activeImg, setActiveImg] = useState(false)

  useEffect(() => {
    const cachedHits = localStorage.getItem(imageListLocal)
    if (cachedHits && JSON.parse(cachedHits).length) {
      setImageList(JSON.parse(cachedHits))
      setActiveImg(true)
    } else {
      firebase
        .imageRef(name)
        .listAll()
        .then((res) => {
          res.items.forEach((itemRef) => {
            itemRef.getDownloadURL().then((url) => {
              setImageList((i) => [...i, url])
            })
          })
          setActiveImg(true)
        })
    }
  }, [name, firebase, imageListLocal])

  if (activeImg) {
    localStorage.setItem(imageListLocal, JSON.stringify(imageList))
  }
  const images = activeImg ? (
    <Zoom arrows={false} indicators={false}>
      {imageList.map((each) => (
        <div key={each} className="each-fade">
          <div className="image-container">
            <img style={{ height: "100%" }} src={each} alt={name} />
          </div>
        </div>
      ))}
    </Zoom>
  ) : (
    <div className="slide-container" style={{ height: "400px" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
        <CircularProgress />
      </div>
    </div>
  )
  return (
    <Card elevation={2} className={`${classes.root} project_card`}>
      <div className={classes.media}>
        <div className="slide-container">{images}</div>
        <Typography variant="h4" component="h2" className={classes.cardHeader}>
          {name}
        </Typography>
        <div className="tagContainer">
          {tags.length ? (
            tags.map((tag) => (
              <span className="tag" key={tag}>
                <img src={`${process.env.PUBLIC_URL}/img/${tag}.svg`} width="100%" alt="tag" />
              </span>
            ))
          ) : (
            <div />
          )}
        </div>
      </div>

      <CardContent>
        <Typography
          variant="body1"
          className={classes.content}
          color="textSecondary"
          component="div"
          align="justify"
        >
          <div dangerouslySetInnerHTML={{ __html: shortDes }} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button aria-label="github_link" size="small" color="primary" href={githubLink}>
          Github Link
        </Button>
      </CardActions>
    </Card>
  )
}

ProjectCard.propTypes = {
  githubLink: PropTypes.string.isRequired,
  shortDes: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  firebase: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
}

export default withFirebase(ProjectCard)
