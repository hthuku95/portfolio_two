import {Container,Typography,Link,Box} from '@mui/material'

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://harrythuku.netlify.app">
          Resume
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'custom.dark', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Get in touch
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="custom.white"
            component="p"
          >
            Great things happen when creativity meets Imagination
          </Typography>
          <Copyright />
        </Container>
      </Box>
    )
}

export default Footer;