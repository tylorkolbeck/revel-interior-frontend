import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, GridList, GridListTile } from '@material-ui/core'
// import Image from 'next/image'

// components
import Button from '../Button/Button'
import Image from '../../Image/Image'

const useStyles = makeStyles(({ content, breakpoints }) => ({
  buttonWrapper: {
    marginTop: '20px',
    marginBottom: '20px',
    '& button': {
      [breakpoints.down('xs')]: {
        width: '100%'
      }
    }
  },
  gridList: {
    '& li': {
      padding: '20px !important',
      paddingLeft: '0px !important',

      [breakpoints.down('sm')]: {
        maxHeight: '400px',
        maxWidth: '400px',
        margin: '0 auto',

        width: '80vw !important',
        height: '80vw !important',
        padding: '20px'
      }
    }
  }
}))

export default function RecentProducts({ products }) {
  const classes = useStyles()

  return (
    <Grid container>
      <GridList className={classes.gridList} cols={3} cellHeight={400}>
        {products.map((product) => (
          <GridListTile key={product.id} cols={1} className={classes.gridList}>
            <Image
              src={product?.featured_image?.Image?.url}
              height={product?.featured_image?.Image?.height}
              width={product?.featured_image?.Image?.width}
              alt={product?.featured_image?.Image?.caption}
            />
          </GridListTile>
        ))}
      </GridList>
      <Grid container justify='center' className={classes.buttonWrapper}>
        <Button>SHOP ALL</Button>
      </Grid>
    </Grid>
  )
}
