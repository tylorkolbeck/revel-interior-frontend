import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import Quote from '../Quote/Quote'
import Button from '../Button/Button'

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  quoteWrapper: {
    paddingLeft: '10vw',
    marginRight: '-5vw',
    paddingBottom: '40px',
    [breakpoints.down('xs')]: {
      margin: '0 auto'
    }
  },
  rightImage: {
    width: '80%',
    marginLeft: 'auto',
    backgroundImage: 'url(/temp/card1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'no-repeat',
    [breakpoints.down('xs')]: {
      width: '90vw',
      height: '90vw',
      margin: '0 auto'
    }
  },
  rightImageWrapper: {
    height: '100%',
    paddingTop: '50px',
    [breakpoints.down('xs')]: {
      height: 'auto',
      marginTop: '100px'
    }
  },
  leftImage: {
    flexGrow: 1,
    backgroundImage: 'url(/temp/card2.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'no-repeat',
    [breakpoints.down('xs')]: {
      width: '90vw',
      height: '90vw',
      margin: '0 auto'
    }
  },
  leftButtonWrapper: {
    paddingTop: '30px'
  },

  rightButtonWrapper: {
    paddingTop: '30px',
    width: '80%',
    marginLeft: 'auto',
    [breakpoints.down('xs')]: {
      width: '100%'
    }
  }
}))

export default function ThreeCard() {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} style={{ marginTop: '150px' }}>
      <Grid container justify='center' style={{ height: '60vh' }}>
        <Grid item xs={12} sm={6}>
          <Grid container direction='column' style={{ height: '100%' }}>
            <Grid item className={classes.quoteWrapper}>
              <Quote>
                Insert a short brand story here. something short and sweet about
                what design means to you and your goal connecting your business
                to your clients…
              </Quote>
            </Grid>
            <Grid item className={classes.leftImage}></Grid>
          </Grid>
          <Grid
            container
            justify='center'
            className={classes.leftButtonWrapper}
          >
            <Button>DESIGN SERVICES</Button>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container className={classes.rightImageWrapper}>
            <Grid item className={classes.rightImage}></Grid>
          </Grid>
          <Grid
            container
            justify='center'
            className={classes.rightButtonWrapper}
          >
            <Button>CURATED SPACES</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
