import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Branch',
    fontSize: '20px'
  }
}))

export default function BodyText({ children, ...props }) {
  const classes = useStyles()
  return <Typography className={classes.root}>{children}</Typography>
}
