import { Container, Grid, Typography, Box, Fade, Slide } from "@mui/material";
import { ReactComponent as AboutLogo } from '../svg/team.svg';
import useInView from '../hooks/useInView';

const styles = {
  svg: {
    width: '90%',
    height: '90%',
  },
};

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <Container id='section2' ref={ref} sx={{ py: { xs: 6, md: 8 } }}>
      <Grid container spacing={4} alignItems="center">

        {/* Left column — title + SVG */}
        <Grid item xs={12} md={6}>
          <Slide direction="right" in={isInView} timeout={600} mountOnEnter unmountOnExit={false}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  color: 'custom.blue',
                  paddingBottom: '16px',
                  borderBottom: 4,
                  display: 'inline-block',
                  width: 'fit-content',
                  mb: 4,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                }}
              >
                About Me
              </Typography>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <AboutLogo style={styles.svg} />
              </Box>
            </Box>
          </Slide>
        </Grid>

        {/* Right column — body text */}
        <Grid item xs={12} md={6}>
          <Fade in={isInView} timeout={900}>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'custom.violet',
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                I'm a full-stack software engineer with a background in mathematics and computer science,
                bringing hands-on production experience across fintech, blockchain, and web development.
                My work spans building internal tooling from scratch, delivering security-sensitive
                infrastructure for crypto exchanges, and engineering smart contracts for DeFi and NFT ecosystems.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'custom.violet',
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                At a Wallet-as-a-Service platform, I served as the sole developer and maintainer of an
                internal{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>MERN-stack Ticket Management System</Box>
                {' '}deployed on{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>AWS</Box>,
                and co-developed a{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>Private Key Export Tool</Box>
                {' '}adopted by over 15 crypto exchanges globally. I also owned the developer-facing
                documentation site and acted as a technical bridge for client support and onboarding.
                On the freelance side, I designed and audited production-grade{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>ERC20 and ERC721 smart contracts</Box>
                {' '}on Binance Smart Chain, with built-in staking, DEX integration, and security hardening.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'custom.violet',
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                My technical toolkit covers{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>React.js</Box>,{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>Next.js</Box>,{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>TypeScript</Box>,{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>Node.js</Box>,{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>Python</Box>,{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>Django</Box>,{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>MongoDB</Box>,{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>PostgreSQL</Box>, and{' '}
                <Box component="span" sx={{ color: 'custom.dark', fontWeight: 600 }}>Solidity</Box>.
                I'm currently deepening my work in AI and machine learning, building tools that combine
                language models with practical real-world use cases.
              </Typography>
            </Box>
          </Fade>
        </Grid>

      </Grid>
    </Container>
  );
};

export default About;
