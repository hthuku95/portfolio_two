import React,{useState} from 'react';
import {Container,Typography,Grid} from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Project from './Project';

const Projects = () =>{
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Container id='section3' height="100vh">
            <Typography variant='h3' align='center' sx={{color:'custom.blue'}} gutterBottom='true'>
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
                                <Project projectName="HtoStudios" projectDescription="Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"/>
                            </TabPanel>
                        </Grid>

                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="1" sx={{color:'custom.violet'}}>
                                <Project projectName="Studyhelp" projectDescription="Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"/>
                            </TabPanel>
                        </Grid>

                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="1" sx={{color:'custom.violet'}}>
                                <Project projectName="Stepain Token" projectDescription="Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"/>
                            </TabPanel>
                        </Grid>

                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="1" sx={{color:'custom.violet'}}>
                                <Project projectName="Yield Farm" projectDescription="Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"/>
                            </TabPanel>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0.5}>
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="2" sx={{color:'custom.violet'}}>
                                <Project projectName="HtoStudios" projectDescription="Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"/>
                            </TabPanel>
                        </Grid>
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="2" sx={{color:'custom.violet'}}>
                                <Project projectName="Studyhelp" projectDescription="Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"/>
                            </TabPanel>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0.5}>
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="3" sx={{color:'custom.violet'}}>
                                <Project projectName="Stepain Token" projectDescription="Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"/>
                            </TabPanel>
                        </Grid>
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="3" sx={{color:'custom.violet'}}>
                                <Project projectName="HtoStudios" projectDescription="Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"/>
                            </TabPanel>
                        </Grid>
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="3" sx={{color:'custom.violet'}}>
                                <Project projectName="Yield Farm" projectDescription="Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"/>
                            </TabPanel>
                        </Grid>
                    </Grid>
                </TabContext>
            </Box>
        </Container>
    )
}

export default Projects;