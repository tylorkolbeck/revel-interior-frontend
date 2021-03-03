import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Hidden, Typography } from '@material-ui/core'

// components
import Image from '../../Image/Image'

const useStyles = makeStyles(({ breakpoints, navbar, color }) => ({
  root: {
    height: '100vh',
    [breakpoints.down('sm')]: {
      height: '70vh'
    }
  },
  leftContainer: {
    flexDirection: 'column',
    height: '100%'
  },
  rightContainer: {
    backgroundImage: ({ heroImage }) =>
      `url(${process.env.NEXT_PUBLIC_CMS_URL + heroImage?.Image?.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    [breakpoints.down('sm')]: {
      marginLeft: 'auto'
    }
  },

  logoText: {
    marginRight: '-30px'
  },
  blurb: {
    color: color.textHeading,
    opacity: '.6',
    fontFamily: 'Branch',
    marginLeft: '2rem',
    fontSize: '50px',
    lineHeight: '40px',

    letterSpacing: '5px',
    [breakpoints.up('md')]: {
      fontSize: '100px',
      lineHeight: '80px'
    }
  },

  logoTextMobile: {
    marginTop: '-20px'
  }
}))

export default function HomepageHero({ data }) {
  const classes = useStyles(data)
  const { blurb, headerTextImage } = data

  function Blurb() {
    return (
      <Typography className={classes.blurb}>
        spaces that <br />
        make you feel
      </Typography>
    )
  }

  return (
    <>
      <Grid container className={classes.root}>
        <Hidden xsDown>
          <Grid item sm={7}>
            <Grid
              container
              justify='space-between'
              className={classes.leftContainer}
            >
              <Grid item></Grid>
              <Grid container alignItems='center' className={classes.blurb}>
                <Grid item>
                  <Blurb />
                </Grid>
              </Grid>
              <Grid item className={classes.logoText}>
                <Image
                  height={headerTextImage?.height}
                  width={headerTextImage?.width}
                  src={headerTextImage?.url}
                  alt='Revel Interiors'
                />
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        <Grid item xs={10} sm={5} className={classes.rightContainer}></Grid>
      </Grid>
      <Hidden smUp>
        <Grid container className={classes.logoTextMobile}>
          <Grid item>
            <Image
              height={headerTextImage?.height}
              width={headerTextImage?.width}
              src={headerTextImage?.url}
              alt='Revel Interiors'
            />
          </Grid>
          <Grid item style={{ marginTop: '50px' }}>
            <Blurb />
          </Grid>
        </Grid>
      </Hidden>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      launches: []
    }
  }
}
