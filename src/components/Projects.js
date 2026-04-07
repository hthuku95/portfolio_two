import React, { useState } from 'react';
import { Container, Typography, Grid, Grow } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Project from './Project';
import useInView from '../hooks/useInView';

import mrcnft from '../img/MRC_NFT.png';
import mrctoken from '../img/MRC_TOKEN.png';
import poemCreator from '../img/aipoemcreator.PNG';
import bidGenerator from '../img/freelancebidgenerator.PNG';
import affirmations from '../img/affirmationsgenerator.PNG';
import ragSearch from '../img/customragsearch.PNG';
import contextTranslator from '../img/contextawarelanguagetranslator.PNG';
import legalAnalyzer from '../img/legaldocumentanalyzer.PNG';

const jsIcon = <i className="devicon-javascript-plain colored"></i>;
const reactIcon = <i className="devicon-reactjs-plain colored"></i>;
const muiIcon = <i className="devicon-materialui-plain colored"></i>;
const solidityIcon = <i className="devicon-solidity-plain colored"></i>;
const pythonIcon = <i className="devicon-python-plain colored"></i>;
const bashIcon = <i className="devicon-bash-plain colored"></i>;

const aiWebProjectDefs = [
  {
    languageOne: jsIcon,
    languageTwo: reactIcon,
    languageThree: muiIcon,
    imageSrc: poemCreator,
    projectName: "AI Poem Creator",
    projectDescription: "A web application that generates beautiful, custom poetry in various styles using AI. Users can customize themes, styles, tones, and include specific literary devices.",
    githubLink: "https://github.com/hthuku95/ai-poem-creator",
    liveLink: "https://ai-poem-creator.vercel.app/",
    projectTag: "AI",
  },
  {
    languageOne: jsIcon,
    languageTwo: reactIcon,
    languageThree: muiIcon,
    imageSrc: bidGenerator,
    projectName: "Freelance Bid Generator",
    projectDescription: "An AI-powered application that helps freelancers create professional bid proposals tailored to specific project requirements, saving time and improving bid quality.",
    githubLink: "https://github.com/hthuku95/freelance-bid-generator",
    liveLink: "https://freelance-bid-generator.vercel.app/",
    projectTag: "AI",
  },
  {
    languageOne: jsIcon,
    languageTwo: reactIcon,
    languageThree: muiIcon,
    imageSrc: affirmations,
    projectName: "Personalized Affirmations Generator",
    projectDescription: "A tool that creates custom affirmations tailored to specific goals, challenges, and personality traits using AI.",
    githubLink: "https://github.com/hthuku95/personalized-affirmations-generator",
    liveLink: "https://personalized-affirmations-generator.vercel.app/",
    projectTag: "AI",
  },
  {
    languageOne: jsIcon,
    languageTwo: reactIcon,
    languageThree: muiIcon,
    imageSrc: ragSearch,
    projectName: "Custom RAG Search Engine",
    projectDescription: "A Retrieval-Augmented Generation search engine that provides accurate, contextual answers by combining traditional search with AI-powered content generation.",
    githubLink: "https://github.com/hthuku95/custom-rag-search",
    liveLink: "https://custom-rag-search.vercel.app/",
    projectTag: "AI",
  },
  {
    languageOne: jsIcon,
    languageTwo: reactIcon,
    languageThree: muiIcon,
    imageSrc: legalAnalyzer,
    projectName: "Legal Document Analyzer",
    projectDescription: "An AI-powered tool that analyzes legal documents, extracting key information, identifying potential risks, and providing plain-language summaries.",
    githubLink: "https://github.com/hthuku95/legal-document-analyzer",
    liveLink: "https://legal-document-analyzer.vercel.app/",
    projectTag: "AI",
  },
  {
    languageOne: jsIcon,
    languageTwo: reactIcon,
    languageThree: muiIcon,
    imageSrc: contextTranslator,
    projectName: "Context-Aware Translator",
    projectDescription: "A translation tool that considers context, tone, and purpose to produce natural and culturally appropriate translations across multiple languages.",
    githubLink: "https://github.com/hthuku95/context-aware-translator",
    liveLink: "https://context-aware-translator.vercel.app/",
    projectTag: "AI",
  },
];

const blockchainProjectDefs = [
  {
    languageOne: solidityIcon,
    languageTwo: pythonIcon,
    languageThree: bashIcon,
    imageSrc: mrctoken,
    projectName: "$MRC_TOKEN",
    projectDescription: "A BEP20 smart contract on Binance Smart Chain with staking/unstaking, anti-bot, anti-whale protections and integrated DEX trading.",
    githubLink: "https://www.github.com/hthuku95/stepain_token",
    liveLink: "https://testnet.bscscan.com/address/0xF2d8A812aca84D69aDc8FE55E753A66d41d01534",
    projectTag: "Freelance",
  },
  {
    languageOne: solidityIcon,
    languageTwo: pythonIcon,
    languageThree: bashIcon,
    imageSrc: mrcnft,
    projectName: "$MRC_NFT",
    projectDescription: "A BSC NFT contract with staking, marketplace, leveling, and renting capabilities — a full NFT ecosystem in a single audited contract.",
    githubLink: "https://www.github.com/hthuku95/stepain_nft",
    liveLink: "https://testnet.bscscan.com/address/0xccd60e519b2dfc80e807d0bb4efebc998a0bb797",
    projectTag: "Freelance",
  },
];

const ProjectGrid = ({ projects, tabValue, isInView }) => (
  <Grid container spacing={3}>
    {projects.map((p, index) => (
      <Grid key={index} item xs={12} sm={6} lg={4}>
        <TabPanel value={tabValue} sx={{ p: 0, color: 'custom.violet' }}>
          <Grow in={isInView} timeout={500 + index * 150}>
            <Box>
              <Project {...p} />
            </Box>
          </Grow>
        </TabPanel>
      </Grid>
    ))}
  </Grid>
);

const Projects = () => {
  const [value, setValue] = useState('1');
  const [ref, isInView] = useInView({ threshold: 0.05 });

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Container id='section3' ref={ref} sx={{ py: { xs: 6, md: 8 } }}>
      <Box sx={{ width: '100%', typography: 'body1', mb: 6 }}>
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
          gutterBottom
        >
          Projects
        </Typography>

        <TabContext value={value}>
          <Box
            sx={{
              display: 'flex',
              borderBottom: 1,
              borderColor: 'divider',
              mb: 3,
              overflowX: 'auto',
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="project categories"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="All" value="1" sx={{ color: 'custom.violet' }} />
              <Tab label="Web / AI" value="2" sx={{ color: 'custom.violet' }} />
              <Tab label="Blockchain" value="3" sx={{ color: 'custom.violet' }} />
            </TabList>
          </Box>

          <ProjectGrid projects={aiWebProjectDefs} tabValue="1" isInView={isInView} />
          <ProjectGrid projects={aiWebProjectDefs} tabValue="2" isInView={isInView} />
          <ProjectGrid projects={blockchainProjectDefs} tabValue="3" isInView={isInView} />
        </TabContext>
      </Box>
    </Container>
  );
};

export default Projects;
