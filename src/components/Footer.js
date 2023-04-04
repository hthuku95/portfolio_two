import {Container,Typography,Link,Box} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';

function Copyright() {
    return (
      <Typography sx={{color:'custom.white'}} variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.linkedin.com/in/hthuku/">
          devThuku
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    return (
        <Box component="footer" id='section5' sx={{ backgroundColor: 'custom.dark', color:'custom.white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom='true' sx={{
            marginBottom:4
          }}>
            Get in touch
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="custom.white"
            component="p"
            sx={{
              marginBottom:4
            }}
          >
            <Link href="https://www.github.com/hthuku95/" underline="none" color="inherit" sx={{
              marginRight:2
            }}>
                <GitHubIcon fontSize="large"/>
            </Link>
            <Link href="https://www.linkedin.com/in/hthuku/" underline="none" color="inherit" sx={{
              marginRight:2
            }}>
                <LinkedInIcon fontSize="large"/>
            </Link>
            <Link href="https://www.twitter.com/blackhatthuku/" underline="none" color="inherit" sx={{
              marginRight:2
            }}>
                <TwitterIcon fontSize="large"/>
            </Link>
            <Link href="mailto: harrythukuomolloh@gmail.com" underline="none" color="inherit" sx={{
              marginRight:2
            }}>
                <EmailIcon fontSize="large"/>
            </Link>
            <Link href="#" underline="none" color="inherit" sx={{
              marginRight:2
            }}>
                <FileDownloadIcon fontSize="large"/>
            </Link>
          </Typography>
          <Copyright />
        </Container>
      </Box>
    )
}

export default Footer;