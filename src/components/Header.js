import { Container, Grid, Typography, Link, Box, Fade } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import { ReactComponent as HeaderLogo } from '../svg/code.svg';

const styles = {
  svg: {
    width: '100%',
    height: '100%',
  },
};

const iconLinkSx = {
  marginRight: 2,
  display: 'inline-flex',
  transition: 'transform 0.2s ease, opacity 0.2s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    opacity: 0.8,
  },
};

const Header = () => {
  return (
    <Container id='section1' sx={{ py: { xs: 4, md: 0 } }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ minHeight: { md: '100vh' } }}
      >
        {/* Text column */}
        <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 1 } }}>
          <Fade in={true} timeout={800}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  p: 2,
                  pl: 0,
                  color: 'custom.blue',
                  fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  '& span': {
                    display: 'inline-block',
                    opacity: 0,
                    animation: 'charReveal 0.5s ease forwards',
                  },
                  '@keyframes charReveal': {
                    from: { opacity: 0, transform: 'translateY(12px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                {'Full-Stack Engineer & Blockchain Developer'.split(' ').map((word, wi) => (
                  <Box
                    key={wi}
                    component="span"
                    sx={{
                      display: 'inline-block',
                      opacity: 0,
                      animation: 'charReveal 0.5s ease forwards',
                      animationDelay: `${wi * 0.12}s`,
                      mr: '0.25em',
                    }}
                  >
                    {word}
                  </Box>
                ))}
              </Typography>

              <Fade in={true} timeout={1400}>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: 'custom.violet',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                    maxWidth: '520px',
                  }}
                >
                  Building production-grade web applications and blockchain solutions.
                  Experienced in delivering secure, scalable systems for crypto exchanges
                  and fintech platforms — from full-stack MERN apps to smart contracts
                  deployed across EVM chains.
                </Typography>
              </Fade>

              <Fade in={true} timeout={1800}>
                <Typography
                  sx={{
                    color: 'custom.blue',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                  }}
                >
                  <Link href="https://www.github.com/hthuku95/" underline="none" color="inherit" sx={iconLinkSx}>
                    <GitHubIcon fontSize="large" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/hthuku" underline="none" color="inherit" sx={iconLinkSx}>
                    <LinkedInIcon fontSize="large" />
                  </Link>
                  <Link href="https://www.twitter.com/blackhatthuku" underline="none" color="inherit" sx={iconLinkSx}>
                    <TwitterIcon fontSize="large" />
                  </Link>
                  <Link href="mailto:harry@devthuku.io" underline="none" color="inherit" sx={iconLinkSx}>
                    <EmailIcon fontSize="large" />
                  </Link>
                  <Link href="#" underline="none" color="inherit" sx={iconLinkSx}>
                    <FileDownloadIcon fontSize="large" />
                  </Link>
                </Typography>
              </Fade>
            </Box>
          </Fade>
        </Grid>

        {/* SVG column — hidden on mobile to keep hero clean */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 2, md: 2 },
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: { sm: '300px', md: 'auto' },
          }}
        >
          <Fade in={true} timeout={1200}>
            <Box sx={{ width: '100%', maxWidth: '500px' }}>
              <HeaderLogo style={styles.svg} />
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
