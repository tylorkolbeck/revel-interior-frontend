import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(({ color }) => ({
  root: {
    fontFamily: 'Branch',
    fontSize: '35px',
    '&:hover': {
      cursor: 'pointer',
      color: color.textHeading
    },
    transition: 'color .5s ease'
  }
}))

export default function NavLink({ children }) {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}
