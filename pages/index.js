import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import ThreeCard from '../components/UI/ThreeCard/ThreeCard'

// Queries
import { getHomepageData } from '../lib/api/homepage'
import { getProducts } from '../lib/api/products'

// Components
import HomepageHero from '../components/Homepage/Hero/Hero'
import SectionHeader from '../components/Typography/SectionHeader/SectionHeader'
import RecentProducts from '../components/UI/RecentProducts/RecentProducts'

const useStyles = makeStyles(({ content }) => ({
  root: {},
  content: {
    padding: content.padding,
    display: 'block',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  contentSection: {
    marginTop: content.marginTop,
    margintBottom: content.marginBottom
  }
}))

export default function Index({ homepageData, productData }) {
  const classes = useStyles()
  const { pageHeader, products = [] } = homepageData

  return (
    <div className={classes.root}>
      <HomepageHero data={pageHeader} />
      <Grid container justify='center' className={classes.content}>
        <Grid item className={classes.contentSection}>
          <ThreeCard />
        </Grid>
        <Grid item className={classes.contentSection}>
          <SectionHeader>SHOP RECENT FINDS</SectionHeader>
          <RecentProducts products={productData} />
        </Grid>
      </Grid>
    </div>
  )
}

export async function getStaticProps() {
  const data = await getHomepageData()
  const productData = await getProducts(3)

  return {
    props: {
      homepageData: data,
      productData: productData
    }
  }
}
