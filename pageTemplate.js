import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {}
}))

export default function PAGETEMPLATE() {
  const classes = useStyles()

  return <div className={classes.root}></div>
}

export async function getStaticProps() {
  return {
    props: {
      launches: []
    }
  }
}
