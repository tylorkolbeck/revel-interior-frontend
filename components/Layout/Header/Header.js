import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(({ color, breakpoints }) => ({
  root: {
    position: 'fixed',
    height: '75px',
    width: '100%',
    zIndex: 1,
    [breakpoints.down('sm')]: {
      background: color.background
    }
  }
}))

export default function Header() {
  const classes = useStyles()

  return <div className={classes.root}>HEADER</div>
}

export async function getStaticProps() {
  return {
    props: {
      launches: []
    }
  }
}
