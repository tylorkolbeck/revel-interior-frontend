import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '40px',
    lineHeight: '40px',
    fontFamily: 'Branch',
    color: theme.color.text
  }
}))

export default function Quote({ children }) {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}
