import React,{useState} from 'react';
import {Container,Typography,Grid} from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Project from './Project';
import htostudios from '../img/HTO_STUDIOS.png';
import mrcnft from '../img/MRC_NFT.png';
import mrctoken from '../img/MRC_TOKEN.png';
import yieldfarm from '../img/YIELD_FARM.png';

const Projects = () =>{
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Container id='section3' height="100vh">
            <Typography variant='h3' align='center' sx={{color:'custom.blue',paddingTop:'60px'}} gutterBottom='true'>
                Projects
            </Typography>
            <Box sx={{ width: '100%', typography: 'body1',marginBottom:'60px' }}>
                <TabContext value={value}>
                    <Box sx={{
                            display: 'flex',
                            borderBottom: 0,
                            justifyContent: 'center', 
                            borderColor: 'divider' 
                        }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="All Projects" value="1" sx={{color:'custom.violet'}}/>
                            <Tab label="Web Projects" value="2" sx={{color:'custom.violet'}}/>
                            <Tab label="Blockchain" value="3" sx={{color:'custom.violet'}}/>
                        </TabList>
                    </Box>
                    <Grid container spacing={0}>
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="1" sx={{color:'custom.violet'}}>
                                <Project 
                                    imageSrc={htostudios}
                                    projectName="HtoStudios" 
                                    projectDescription="HtoStudios is a platform for learning blockchain development that provides resources and tools for building decentralized applications and contributing to the growth of the industry."
                                    githubLink="https://www.github.com/hthuku95/hto"
                                    liveLink="https://www.htostudios.com"
                                />
                            </TabPanel>
                        </Grid>

                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="1" sx={{color:'custom.violet'}}>
                                <Project 
                                    imageSrc={mrctoken}
                                    projectName="$MRC_TOKEN" 
                                    projectDescription="A BEP20 smart contract deployed on Binance Smart Chain that includes Staking/Unstaking, Anti-bot, Anti-whale and users are charged developement and marketing fees."
                                    githubLink="https://www.github.com/hthuku95/stepain_token"
                                    liveLink="https://testnet.bscscan.com/address/0xF2d8A812aca84D69aDc8FE55E753A66d41d01534"
                                />
                            </TabPanel>
                        </Grid>
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="1" sx={{color:'custom.violet'}}>
                                <Project 
                                    imageSrc={mrcnft}
                                    projectName="$MRC_NFT" 
                                    projectDescription="A Binance Smart Chain NFT contract with reward incentives for user engagement, featuring staking, a marketplace, leveling up, and renting."
                                    githubLink="https://www.github.com/hthuku95/stepain_nft"
                                    liveLink="https://testnet.bscscan.com/address/0xccd60e519b2dfc80e807d0bb4efebc998a0bb797"
                                />
                            </TabPanel>
                        </Grid>

                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="1" sx={{color:'custom.violet'}}>
                                <Project 
                                    imageSrc={yieldfarm}
                                    projectName="Yield Farm" 
                                    projectDescription="A Full stack web3 Yield Farm Dapp that allows users to stake ERC20 Tokens and claim rewards built with react, python, typescript and solidity."
                                    githubLink=""
                                    liveLink=""
                                />
                            </TabPanel>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0.5}>
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="2" sx={{color:'custom.violet'}}>
                                <Project
                                    imageSrc={htostudios} 
                                    projectName="HtoStudios" 
                                    projectDescription="HtoStudios is a platform for learning blockchain development that provides resources and tools for building decentralized applications and contributing to the growth of the industry."
                                    githubLink="https://www.github.com/hthuku95/hto"
                                    liveLink="https://www.htostudios.com"
                                />
                            </TabPanel>
                        </Grid>
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="2" sx={{color:'custom.violet'}}>
                                <Project 
                                    imageSrc={yieldfarm}
                                    projectName="Yield Farm" 
                                    projectDescription="A Full stack web3 Yield Farm Dapp that allows users to stake ERC20 Tokens and claim rewards built with react, python, typescript and solidity."
                                    githubLink=""
                                    liveLink=""
                                />
                            </TabPanel>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0.5}>
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="3" sx={{color:'custom.violet'}}>
                                <Project 
                                    imageSrc={mrctoken}
                                    projectName="$MRC_TOKEN" 
                                    projectDescription="A BEP20 smart contract deployed on Binance Smart Chain that includes Staking/Unstaking, Anti-bot, Anti-whale and users are charged developement and marketing fees."
                                    githubLink="https://www.github.com/hthuku95/stepain_token"
                                    liveLink="https://testnet.bscscan.com/address/0xF2d8A812aca84D69aDc8FE55E753A66d41d01534"
                                />
                            </TabPanel>
                        </Grid>
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="3" sx={{color:'custom.violet'}}>
                                <Project
                                    imageSrc={mrcnft} 
                                    projectName="$MRC_NFT" 
                                    projectDescription="A Binance Smart Chain NFT contract with reward incentives for user engagement, featuring staking, a marketplace, leveling up, and renting."
                                    githubLink="https://www.github.com/hthuku95/stepain_nft"
                                    liveLink="https://testnet.bscscan.com/address/0xccd60e519b2dfc80e807d0bb4efebc998a0bb797"
                                />
                            </TabPanel>
                        </Grid>
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="3" sx={{color:'custom.violet'}}>
                                <Project 
                                    imageSrc={yieldfarm}
                                    projectName="Yield Farm" 
                                    projectDescription="A Full stack web3 Yield Farm Dapp that allows users to stake ERC20 Tokens and claim rewards built with react python and solidity."
                                    githubLink=""
                                    liveLink=""
                                />
                            </TabPanel>
                        </Grid>
                    </Grid>
                </TabContext>
            </Box>
        </Container>
    )
}

export default Projects;