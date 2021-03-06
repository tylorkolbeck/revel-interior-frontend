import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(({ color, breakpoints }) => ({
  root: {
    borderRadius: '0px',
    borderColor: color.text,
    color: color.text,
    fontFamily: 'Branch',
    fontSize: '24px',
    '&:hover': {
      background: color.backgroundSecondary,
      borderColor: color.backgroundSecondary
    }
  }
}))

export default function CustomButton({ children }) {
  const classes = useStyles()
  return (
    <Button className={classes.root} variant='outlined'>
      {children}
    </Button>
  )
}
