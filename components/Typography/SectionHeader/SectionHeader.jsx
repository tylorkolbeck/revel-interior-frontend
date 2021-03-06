import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(({ color, fonts, breakpoints }) => ({
  root: {
    fontFamily: fonts.heading,
    fontSize: '8vh',
    lineHeight: '7vh',
    color: color.textHeading
  }
}))

export default function SectionHeader({ children }) {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}
