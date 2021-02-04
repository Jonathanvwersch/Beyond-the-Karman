import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import InfoIcon from "@material-ui/icons/Info"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  disabledButton: {
    background: "gray!important",
    color: "white!important",
    margin: theme.spacing(1),
  },
}))

function CardButtons({ watchLink }) {
  const classes = useStyles()

  return (
    <div className="flex items-center mt-8 whitespace-nowrap">
      {watchLink ? (
        <a href={watchLink} target="_blank" rel="noreferrer">
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.button}
            startIcon={<PlayArrowIcon />}
          >
            Watch
          </Button>
        </a>
      ) : null}

      <Button
        variant="contained"
        color="default"
        size="small"
        className={classes.button}
        startIcon={<InfoIcon />}
      >
        More info
      </Button>
    </div>
  )
}

export default CardButtons
