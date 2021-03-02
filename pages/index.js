import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { getHomepageData } from '../lib/api/homepage'

// Components
import HomepageHero from '../components/HomepageHero/HomepageHero'

const useStyles = makeStyles((theme) => ({
  root: {}
}))

export default function Index({ homepageData }) {
  const classes = useStyles()
  const { pageHeader } = homepageData

  return (
    <div className={classes.root}>
      <HomepageHero data={pageHeader} />
    </div>
  )
}

export async function getStaticProps() {
  const data = await getHomepageData()

  return {
    props: {
      homepageData: data
    }
  }
}
