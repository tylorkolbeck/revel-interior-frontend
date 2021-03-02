import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.color.backgroundSecondary,
    height: '300px'
  }
}))

export default function Footer() {
  const classes = useStyles()

  return <div className={classes.root}>FOOTER</div>
}
