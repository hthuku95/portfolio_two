import React,{useState} from 'react';
import {Container,Typography,Grid} from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Project from './Project';
import mrcnft from '../img/MRC_NFT.png';
import mrctoken from '../img/MRC_TOKEN.png';
import yieldfarm from '../img/YIELD_FARM.png';
import gradis from '../img/gradisportfolio.PNG';
import poemCreator from '../img/aipoemcreator.PNG';
import bidGenerator from '../img/freelancebidgenerator.PNG';
import affirmations from '../img/affirmationsgenerator.PNG';
import ragSearch from '../img/customragsearch.PNG';
import contextTranslator  from '../img/contextawarelanguagetranslator.PNG';
import legalAnalyzer from '../img/legaldocumentanalyzer.PNG';

const Projects = () =>{
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const allProjects = [
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={poemCreator}
        projectName="AI Poem Creator" 
        projectDescription="A web application that generates beautiful, custom poetry in various styles using AI. Users can customize themes, styles, tones, and include specific literary devices to create unique poems."
        githubLink="https://github.com/hthuku95/ai-poem-creator"
        liveLink="https://ai-poem-creator.vercel.app/"
        projectTag="AI"
      />,
      <Project 
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={bidGenerator}
        projectName="Freelance Bid Generator" 
        projectDescription="An AI-powered application that helps freelancers create professional bid proposals tailored to specific project requirements, saving time and improving bid quality."
        githubLink="https://github.com/hthuku95/freelance-bid-generator"
        liveLink="https://freelance-bid-generator.vercel.app/"
        projectTag="AI"
      />,
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={affirmations}
        projectName="Personalized Affirmations Generator" 
        projectDescription="A tool that creates custom affirmations tailored to specific goals, challenges, and personality traits using AI, helping users incorporate positive self-talk into their daily routine."
        githubLink="https://github.com/hthuku95/personalized-affirmations-generator"
        liveLink="https://personalized-affirmations-generator.vercel.app/"
        projectTag="AI"
      />,
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={ragSearch}
        projectName="Custom RAG Search Engine" 
        projectDescription="A Retrieval-Augmented Generation search engine that provides accurate, contextual answers to queries by combining traditional search with AI-powered content generation."
        githubLink="https://github.com/hthuku95/custom-rag-search"
        liveLink="https://custom-rag-search.vercel.app/"
        projectTag="AI"
      />,
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={legalAnalyzer}
        projectName="Legal Document Analyzer" 
        projectDescription="An AI-powered tool that analyzes legal documents, extracting key information, identifying potential risks, and providing summaries and recommendations in an easy-to-understand format."
        githubLink="https://github.com/hthuku95/legal-document-analyzer"
        liveLink="https://legal-document-analyzer.vercel.app/"
        projectTag="AI"
      />,
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={contextTranslator}
        projectName="Context-Aware Translator" 
        projectDescription="A translation tool that goes beyond word-for-word translation by considering context, tone, and purpose to produce more natural and culturally appropriate translations across multiple languages."
        githubLink="https://github.com/hthuku95/context-aware-translator"
        liveLink="https://context-aware-translator.vercel.app/"
        projectTag="AI"
      />
    ]

    const webProjects = [
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={poemCreator}
        projectName="AI Poem Creator" 
        projectDescription="A web application that generates beautiful, custom poetry in various styles using AI. Users can customize themes, styles, tones, and include specific literary devices to create unique poems."
        githubLink="https://github.com/hthuku95/ai-poem-creator"
        liveLink="https://ai-poem-creator.vercel.app/"
        projectTag="AI"
      />,
      <Project 
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={bidGenerator}
        projectName="Freelance Bid Generator" 
        projectDescription="An AI-powered application that helps freelancers create professional bid proposals tailored to specific project requirements, saving time and improving bid quality."
        githubLink="https://github.com/hthuku95/freelance-bid-generator"
        liveLink="https://freelance-bid-generator.vercel.app/"
        projectTag="AI"
      />,
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={affirmations}
        projectName="Personalized Affirmations Generator" 
        projectDescription="A tool that creates custom affirmations tailored to specific goals, challenges, and personality traits using AI, helping users incorporate positive self-talk into their daily routine."
        githubLink="https://github.com/hthuku95/personalized-affirmations-generator"
        liveLink="https://personalized-affirmations-generator.vercel.app/"
        projectTag="AI"
      />,
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={ragSearch}
        projectName="Custom RAG Search Engine" 
        projectDescription="A Retrieval-Augmented Generation search engine that provides accurate, contextual answers to queries by combining traditional search with AI-powered content generation."
        githubLink="https://github.com/hthuku95/custom-rag-search"
        liveLink="https://custom-rag-search.vercel.app/"
        projectTag="AI"
      />,
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={legalAnalyzer}
        projectName="Legal Document Analyzer" 
        projectDescription="An AI-powered tool that analyzes legal documents, extracting key information, identifying potential risks, and providing summaries and recommendations in an easy-to-understand format."
        githubLink="https://github.com/hthuku95/legal-document-analyzer"
        liveLink="https://legal-document-analyzer.vercel.app/"
        projectTag="AI"
      />,
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={contextTranslator}
        projectName="Context-Aware Translator" 
        projectDescription="A translation tool that goes beyond word-for-word translation by considering context, tone, and purpose to produce more natural and culturally appropriate translations across multiple languages."
        githubLink="https://github.com/hthuku95/context-aware-translator"
        liveLink="https://context-aware-translator.vercel.app/"
        projectTag="AI"
      />
    ]

    const blockchainProjects = [
      <Project 
        languageOne={
            <i class="devicon-solidity-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-python-plain colored"></i>
          }
        languageThree={
            <i class="devicon-bash-plain colored"></i>
          }
        imageSrc={mrctoken}
        projectName="$MRC_TOKEN" 
        projectDescription="A BEP20 smart contract deployed on Binance Smart Chain that includes Staking/Unstaking, Anti-bot, Anti-whale and users are charged developement and marketing fees."
        githubLink="https://www.github.com/hthuku95/stepain_token"
        liveLink="https://testnet.bscscan.com/address/0xF2d8A812aca84D69aDc8FE55E753A66d41d01534"
        projectTag="Freelance"
      />,
      <Project
        languageOne={
            <i class="devicon-solidity-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-python-plain colored"></i>
          }
        languageThree={
            <i class="devicon-bash-plain colored"></i>
          }
        imageSrc={mrcnft} 
        projectName="$MRC_NFT" 
        projectDescription="A Binance Smart Chain NFT contract with reward incentives for user engagement, featuring staking, a marketplace, leveling up, and renting."
        githubLink="https://www.github.com/hthuku95/stepain_nft"
        liveLink="https://testnet.bscscan.com/address/0xccd60e519b2dfc80e807d0bb4efebc998a0bb797"
        projectTag="Freelance"
      />
    ]

    const aiProjects = [
        <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={poemCreator}
        projectName="AI Poem Creator" 
        projectDescription="A web application that generates beautiful, custom poetry in various styles using AI. Users can customize themes, styles, tones, and include specific literary devices to create unique poems."
        githubLink="https://github.com/hthuku95/ai-poem-creator"
        liveLink="https://ai-poem-creator.vercel.app/"
        projectTag="AI"
      />,
      <Project 
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={bidGenerator}
        projectName="Freelance Bid Generator" 
        projectDescription="An AI-powered application that helps freelancers create professional bid proposals tailored to specific project requirements, saving time and improving bid quality."
        githubLink="https://github.com/hthuku95/freelance-bid-generator"
        liveLink="https://freelance-bid-generator.vercel.app/"
        projectTag="AI"
      />,
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={affirmations}
        projectName="Personalized Affirmations Generator" 
        projectDescription="A tool that creates custom affirmations tailored to specific goals, challenges, and personality traits using AI, helping users incorporate positive self-talk into their daily routine."
        githubLink="https://github.com/hthuku95/personalized-affirmations-generator"
        liveLink="https://personalized-affirmations-generator.vercel.app/"
        projectTag="AI"
      />,
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={ragSearch}
        projectName="Custom RAG Search Engine" 
        projectDescription="A Retrieval-Augmented Generation search engine that provides accurate, contextual answers to queries by combining traditional search with AI-powered content generation."
        githubLink="https://github.com/hthuku95/custom-rag-search"
        liveLink="https://custom-rag-search.vercel.app/"
        projectTag="AI"
      />,
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={legalAnalyzer}
        projectName="Legal Document Analyzer" 
        projectDescription="An AI-powered tool that analyzes legal documents, extracting key information, identifying potential risks, and providing summaries and recommendations in an easy-to-understand format."
        githubLink="https://github.com/hthuku95/legal-document-analyzer"
        liveLink="https://legal-document-analyzer.vercel.app/"
        projectTag="AI"
      />,
      <Project
        languageOne={
            <i class="devicon-javascript-plain colored"></i>
          }
        languageTwo={
            <i class="devicon-reactjs-plain colored"></i>
          }
        languageThree={
            <i class="devicon-materialui-plain colored"></i>
          }
        imageSrc={contextTranslator}
        projectName="Context-Aware Translator" 
        projectDescription="A translation tool that goes beyond word-for-word translation by considering context, tone, and purpose to produce more natural and culturally appropriate translations across multiple languages."
        githubLink="https://github.com/hthuku95/context-aware-translator"
        liveLink="https://context-aware-translator.vercel.app/"
        projectTag="AI"
      />
    ]
    
    return (
        <Container id='section3' height="100vh">
            <Box sx={{ width: '100%', typography: 'body1',marginBottom:'60px' }}>
                <Typography variant="h3" sx={{
                    color:'custom.blue',
                    padding: '0 40px',
                    paddingTop:'40px', 
                    paddingBottom:'25px', 
                    borderBottom: 4,
                    display: 'inline-block', 
                    width: 'fit-content',
                    marginBottom: '40px' 
                    }} 
                    gutterBottom='true'>
                    Projects
                </Typography>
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
                            <Tab label="AI" value="4" sx={{color:'custom.violet'}}/>
                        </TabList>
                    </Box>
                    <Grid container spacing={0.5}>
                        {allProjects.map((project)=>(
                          <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                            <TabPanel value="1" sx={{color:'custom.violet'}}>
                              {project}
                            </TabPanel>
                          </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={0.5}>
                      {webProjects.map((project)=>(
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                          <TabPanel value="2" sx={{color:'custom.violet'}}>
                            {project}
                          </TabPanel>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid container spacing={0.5}>
                      {blockchainProjects.map((project)=>(
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                          <TabPanel value="3" sx={{color:'custom.violet'}}>
                            {project}
                          </TabPanel>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid container spacing={0.5}>
                      {aiProjects.map((project)=>(
                        <Grid item xs={16} sm={16} md={8} lg={4} xl={4} gutterBottom='true'>
                          <TabPanel value="3" sx={{color:'custom.violet'}}>
                            {project}
                          </TabPanel>
                        </Grid>
                      ))}
                    </Grid>
                </TabContext>
            </Box>
        </Container>
    )
}

export default Projects;