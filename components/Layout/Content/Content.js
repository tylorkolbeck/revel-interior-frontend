import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.color.background
  }
}))

export default function Content({ children }) {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

export async function getStaticProps() {
  return {
    props: {
      launches: []
    }
  }
}
