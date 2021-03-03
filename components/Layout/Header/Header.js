import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(({ color, breakpoints }) => ({
  root: {
    position: 'fixed',
    height: '100px',
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
    transition: 'background-color .2s ease',
    zIndex: 1,

    [breakpoints.up('lg')]: {
      paddingLeft: '75px',
      paddingRight: '75px'
    },

    background: (scrolled) => (scrolled ? color.background : ''),
    backgroundImage: (scrolled) =>
      scrolled ? `url(/images/bg_grunge.png)` : '',
    zIndex: 1

    // [breakpoints.down('sm')]: {
    //   background: color.background,
    //   backgroundImage: `url(/images/bg_grunge.png)`
    // }
  }
}))

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false)
  const classes = useStyles(scrolled)

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScroll() {
    if (window.scrollY > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <Grid
      container
      className={classes.root}
      justify='space-between'
      alignItems='center'
    >
      <Grid item>
        <img src='/images/ri_logo.svg' width='30px' />
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <img src='/images/hamburger.svg' width='40px' />
      </Grid>
    </Grid>
  )
}

export async function getStaticProps() {
  return {
    props: {
      launches: []
    }
  }
}
