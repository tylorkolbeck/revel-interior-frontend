import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(({ color }) => ({
  root: {
    fontFamily: 'Oakley',
    color: color.textHeading,
    fontSize: '6vh',
    lineHeight: '4vh'
  }
}))

export default function CursiveHeading({ children }) {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}
