import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import Quote from '../Quote/Quote'
import Button from '../Button/Button'

const backgroundSettings = {
  backgroundSize: 'cover',
  backgroundPosition: 'bottom center',
  backgroundRepeat: 'no-repeat'
}

const useStyles = makeStyles(({ breakpoints, content }) => ({
  root: {
    maxWidth: '1200px',
    marginTop: content.marginTop,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  quoteWrapper: {
    paddingLeft: '5vw',
    marginRight: '-4vw',
    marginBottom: '40px',
    [breakpoints.down('sm')]: {
      paddingLeft: '0',
      marginRight: '0'
    }
  },
  leftImageWrapper: {},
  rightImageWrapper: {
    [breakpoints.up('sm')]: {
      paddingLeft: '5vw'
    }
  },

  rightImageBackground: {
    backgroundImage: 'url(/temp/card1.png)',
    justifyContent: 'flex-end',
    maxHeight: '550px',
    ...backgroundSettings,
    [breakpoints.up('xs')]: {
      height: '40vh',
      marginTop: '50px'
    },
    [breakpoints.up('sm')]: {
      height: '50vh'
    },
    [breakpoints.up('md')]: {
      height: '60vh'
    },
    [breakpoints.up('lg')]: {},
    [breakpoints.up('xl')]: {}
  },
  leftImageBackground: {
    backgroundImage: 'url(/temp/card2.png)',
    justifyContent: 'flex-end',

    ...backgroundSettings,
    [breakpoints.up('xs')]: {
      height: '40vh'
    },
    [breakpoints.up('sm')]: {},
    [breakpoints.up('md')]: {},
    [breakpoints.up('lg')]: {},
    [breakpoints.up('xl')]: {}
  },
  buttonWrapper: {
    margin: '20px auto',
    textAlign: 'center',
    [breakpoints.down('sm')]: {
      '& button': {
        width: '100%'
      }
    }
  }
}))

export default function ThreeCard() {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} alignItems='flex-end'>
      <Grid item xs={12} sm={6} md={6} className={classes.leftImageWrapper}>
        <div className={classes.quoteWrapper}>
          <Quote>
            Insert a short brand story here. something short and sweet about
            what design means to you and your goal connecting your business to
            your clients…
          </Quote>
        </div>
        <Grid
          container
          alignItems='flex-end'
          className={classes.leftImageBackground}
        ></Grid>
        <div className={classes.buttonWrapper}>
          <Button>CURATED SPACES</Button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={6} className={classes.rightImageWrapper}>
        <Grid
          container
          className={classes.rightImageBackground}
          alignItems='flex-end'
        ></Grid>
        <div className={classes.buttonWrapper}>
          <Button>DESIGN SERVICES</Button>
        </div>
      </Grid>
    </Grid>
  )
}

// quoteWrapper: {
//   paddingLeft: '10vw',
//   marginRight: '-5vw',
//   paddingBottom: '40px',
//   [breakpoints.down('xs')]: {
//     margin: '0 auto'
//   }
// },

{
  /* <Grid item className={classes.quoteWrapper}>
              <Quote>
                Insert a short brand story here. something short and sweet about
                what design means to you and your goal connecting your business
                to your clients…
              </Quote>
            </Grid> */
}

// leftButtonWrapper: {},

// rightButtonWrapper: {}

{
  /* <Grid
            container
            justify='center'
            className={classes.rightButtonWrapper}
          >
            <Button>CURATED SPACES</Button>
          </Grid> */
}

{
  /* <Grid
            container
            justify='center'
            className={classes.leftButtonWrapper}
          >
            <Button>DESIGN SERVICES</Button>
          </Grid> */
}
