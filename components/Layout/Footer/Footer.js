import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

import { navLinks } from '../../../lib/navLinks'

// components
import SectionHeader from '../../Typography/SectionHeader/SectionHeader'
import NavLink from '../../Typography/NavLink/NavLink'
import InstagramGrid from '../../UI/InstagramGrid/InstagramGrid'
import BodyText from '../../Typography/BodyText/BodyText'

const useStyles = makeStyles(({ color, breakpoints }) => ({
  root: {
    background: color.backgroundSecondary,
    padding: '100px',
    paddingBottom: '20px',
    [breakpoints.down('sm')]: {
      padding: '25px'
    }
  },

  navLinks: {
    [breakpoints.down('sm')]: {
      order: 2
    }
  },
  link: {
    marginBottom: '20px',
    [breakpoints.down('sm')]: {
      marginBottom: '10px'
    }
  },
  socialImages: {
    [breakpoints.down('sm')]: {
      order: 1,
      marginBottom: '50px',
      marginTop: '50px'
    }
  },
  footerDisclaimer: {
    textAlign: 'center',
    padding: '30px'
  }
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={5} className={classes.navLinks}>
          <SectionHeader>REVEL INTERIORS</SectionHeader>
          <Grid container direction='column'>
            {navLinks.map((link) => (
              <Grid item key={link.label} className={classes.link}>
                <NavLink>{link?.label.toUpperCase()}</NavLink>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} className={classes.socialImages}>
          <InstagramGrid />
        </Grid>
      </Grid>
      <Grid container justify='center' className={classes.footerDisclaimer}>
        <BodyText>
          2021 Revel Ineriors | ALL RIGHTS RESERVED | WEBSITE DEIGN HEART&SEA
          STUDIO
        </BodyText>
      </Grid>
    </div>
  )
}
