import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { getHomepageData } from '../lib/api/homepage'
import ThreeCard from '../components/UI/ThreeCard/ThreeCard'

// Components
import HomepageHero from '../components/Homepage/Hero/Hero'
import SectionHeader from '../components/Typography/SectionHeader/SectionHeader'

const useStyles = makeStyles(({ content }) => ({
  root: {},
  content: {
    padding: content.padding,
    display: 'block'
  }
}))

export default function Index({ homepageData }) {
  const classes = useStyles()
  const { pageHeader } = homepageData

  return (
    <div className={classes.root}>
      <HomepageHero data={pageHeader} />
      <div className={classes.content}>
        <ThreeCard />
      </div>
      <SectionHeader>SHOP RECENT FINDS</SectionHeader>
      {/* <div style={{ height: '1000px' }}></div> */}
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
