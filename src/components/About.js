import {Container,Grid,Typography} from "@mui/material";

const About = () =>{
    return (
        <Container id='section4' >
            <Grid container spacing={2} columns={16}>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height='100vh'>
                    <Typography variant="h3" sx={{color:'custom.blue'}}>About Me</Typography>
                </Grid>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} >
                    <Typography
                        variant="body1" 
                        sx={{ 
                            p:4,
                            color:'custom.violet'
                        }} 
                        gutterBottom='true'>
                        With a strong background in mathematics and computer science, 
                        I bring a unique combination of university education and self-taught 
                        experience to my expertise in web development and blockchain technology. 
                        I have a thorough understanding of front-end technologies such as HTML/CSS, 
                        MaterialUI, React.js, Next.js, JavaScript, and TypeScript, as well as 
                        back-end technologies like Python, Django, and Node.js. My experience in 
                        blockchain development includes working with Solidity, Hardhat, Brownie, 
                        Ethers.js, and various EVM compatible chains. I am passionate about the potential 
                        of blockchain and web3, and have experience in developing and deploying smart 
                        contracts and decentralized applications. I am constantly staying updated on 
                        the latest advancements in the field, particularly in the areas of NFTs, 
                        DeFi, Metaverse, and smart contracts, with a special interest in hybrid-smart 
                        contracts and SBTs.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;