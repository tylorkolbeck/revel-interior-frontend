import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  color: {
    background: '#F2E6DF',
    backgroundSecondary: '#D9C3B0',
    text: '#0D0D0D',
    textHeading: '#8C6751'
  },
  fonts: {
    heading: 'Branch'
  },
  navbar: {
    height: '60px'
  },
  content: {
    padding: '0px 30px',
    marginTop: '150px',
    marginBottom: '150px'
  }
})

export default theme
