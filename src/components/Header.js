import {Container,Grid,Typography,Link} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import {ReactComponent as HeaderLogo} from '../svg/code.svg';

const styles = {
    svg: {
      width: '100%',
      height: '100%',
    },
  };

const Header = () => {
    return (
        <Container id='section1'>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height="100vh">
                    <Typography variant="h2" sx={{
                         p:4,
                         color:'custom.blue'
                         }}>
                        Freelance Web & Blockchain Developer
                    </Typography>
                    <Typography variant="body1" sx={{
                        marginLeft:4,
                        marginBottom:4,
                        color: 'custom.violet'
                    }}
                    gutterBottom='true'
                    >
                        Full Stack Web & Blockchain Developer with expertise in web development and blockchain technology. Skilled in creating secure and innovative solutions. Committed to delivering user-centered outcomes and always seeking new challenges.
                    </Typography>
                    <Typography sx={{
                        marginLeft:4,
                        color:'custom.blue',
                        }}
                        gutterBottom='true'
                        >
                            <Link href="https://www.github.com/hthuku95/" underline="none" color="inherit" sx={{
                                marginRight:2
                            }}>
                                <GitHubIcon fontSize="large"/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/hthuku" underline="none" color="inherit" sx={{
                                marginRight:2
                            }}>
                                <LinkedInIcon fontSize="large"/>
                            </Link>
                            <Link href="https://www.twitter.com/blackhatthuku" underline="none" color="inherit" sx={{
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
                </Grid>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height="100vh">
                    <HeaderLogo style={styles.svg}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Header;