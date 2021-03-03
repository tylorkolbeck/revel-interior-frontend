import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(({ color }) => ({
  root: {
    borderRadius: '0px',
    borderColor: color.text,
    color: color.text,
    fontFamily: 'Branch',
    fontSize: '24px'
  }
}))

export default function CustomButton({ children }) {
  const classes = useStyles()
  return (
    <Button
      className={classes.root}
      variant='outlined'
      className={classes.root}
    >
      {children}
    </Button>
  )
}
