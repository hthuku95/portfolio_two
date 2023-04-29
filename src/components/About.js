import {Container,Grid,Typography,Box} from "@mui/material";
import {ReactComponent as AboutLogo} from '../svg/team.svg';

const styles = {
    svg: {
      width: '90%',
      height: '90%',
    },
  };

const About = () =>{
    return (
        <Container id='section2' >
            <Grid container spacing={2} columns={16}>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height='100vh'>
                    <Typography variant="h3" align='center' sx={{
                        color:'custom.blue',
                        padding: '0 40px',
                        paddingTop:'40px',
                        paddingBottom:'25px', 
                        borderBottom: 4,
                        display: 'inline-block', 
                        width: 'fit-content',
                        marginBottom: '40px'
                        }}>
                            About Me
                        </Typography>
                    <AboutLogo style={styles.svg}/>
                </Grid>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} >
                    <Typography
                        variant="body1" 
                        sx={{ 
                            p:4,
                            color:'custom.violet',
                            marginBottom:'8px',
                            paddingBottom:'8px'
                        }} 
                        gutterBottom='true'>
                            With a strong foundation in mathematics and computer science, I bring a unique combination of academic education and self-taught experience to my expertise in web development and blockchain technology. My passion for innovation in the tech industry has led me to delve deeply into the latest advancements in the fields of blockchain, artificial intelligence (AI), and web3.
                    </Typography>
                    <Typography
                        variant="body1" 
                        sx={{ 
                            p:4,
                            pt:1,
                            color:'custom.violet'
                        }} 
                        gutterBottom='true'>
                            As a software developer, I have an in-depth understanding of front-end technologies such as <Box component="span" sx={{color:'custom.dark'}}>HTML/CSS</Box>, <Box component="span" sx={{color:'custom.dark'}}>MaterialUI</Box>, <Box component="span" sx={{color:'custom.dark'}}>React.js</Box>, <Box component="span" sx={{color:'custom.dark'}}>Next.js</Box>, <Box component="span" sx={{color:'custom.dark'}}>JavaScript</Box>, and <Box component="span" sx={{color:'custom.dark'}}>TypeScript</Box>. I am also well-versed in back-end technologies such as <Box component="span" sx={{color:'custom.dark'}}>Python</Box>, <Box component="span" sx={{color:'custom.dark'}}>Django</Box>, and <Box component="span" sx={{color:'custom.dark'}}>Node.js</Box>. My experience in blockchain development has provided me with knowledge in <Box component="span" sx={{color:'custom.dark'}}>Solidity</Box>, <Box component="span" sx={{color:'custom.dark'}}>Hardhat</Box>, <Box component="span" sx={{color:'custom.dark'}}>Brownie</Box>, <Box component="span" sx={{color:'custom.dark'}}>Ethers.js</Box>, and various EVM compatible chains. I have experience in developing and deploying smart contracts and decentralized applications, and I constantly stay updated on the latest advancements in the field, particularly in the areas of NFTs, DeFi, Metaverse, and smart contracts.
                    </Typography>
                    <Typography
                        variant="body1" 
                        sx={{ 
                            p:4,
                            pt:1,
                            color:'custom.violet'
                        }} 
                        gutterBottom='true'>
                            My long-term goal is to become a tech entrepreneur and make a meaningful impact in the tech industry. I see myself working in the fields of blockchain or AI, using these technologies to solve some of the world's most pressing problems. I am particularly interested in exploring the potential of hybrid-smart contracts and SBTs, and I believe that these technologies can be instrumental in building a future powered by blockchain and AI.
                    </Typography>
                    <Typography
                        variant="body1" 
                        sx={{ 
                            p:4,
                            pt:1,
                            color:'custom.violet'
                        }} 
                        gutterBottom='true'>
                            In pursuing my goals, I am committed to staying informed about the latest trends and developments in the field. I actively engage with communities and attend conferences and events to expand my knowledge and build my network. I am excited about the potential of blockchain and AI to revolutionize the way we live and work, and I am eager to be a part of the movement to drive these changes forward.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;