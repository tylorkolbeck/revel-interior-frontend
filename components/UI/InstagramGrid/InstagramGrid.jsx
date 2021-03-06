import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

// components
import CursiveHeading from '../../Typography/CursiveHeading/CursiveHeading'

const useStyles = makeStyles(({ color, breakpoints }) => ({
  root: {
    flexGrow: 1
  },
  photoGrid: {
    width: '20%',
    border: `10px solid ${color.backgroundSecondary}`,
    paddingBottom: '23%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [breakpoints.down('xs')]: {
      border: `3px solid ${color.backgroundSecondary}`
    }
  },
  instagramHeading: {
    textAlign: 'right',
    flexGrow: 1,
    [breakpoints.down('sm')]: {
      textAlign: 'left',
      marginBottom: '20px'
    }
  }
}))

export default function InstagramGrid() {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.instagramHeading}>
        <CursiveHeading>follow me on instagram</CursiveHeading>
      </Grid>

      <Grid container>
        {[1, 2, 3, 4, 5, 6].map((img) => (
          <Grid
            item
            xs={4}
            key={img}
            className={classes.photoGrid}
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1610177498573-78deaa4a797b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80)'
            }}
          ></Grid>
        ))}
      </Grid>
    </Grid>
  )
}
