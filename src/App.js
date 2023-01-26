import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';

const theme = createTheme({
  palette: {
    primary: {
      dark: '#1565c0',
      main: '#1976d2',
      light:'#42a5f5'
    },
    secondary: {
      dark:'#7b1fa2',
      main:'#9c27b0',
      light:'#ba68c8'
    },
    error: {
      dark:'#c62828',
      main:'#d32f2f',
      light:'#ef5350'
    },
    warning: {
      dark:'#e65100',
      main:'#ed6c02',
      light:'#ff9800'
    },
    info: {
      dark:'#01579b',
      main:'#0288d1',
      light:'#03a9f4'
    },
    success: {
      dark:'#1b5e20',
      main:'#2e7d32',
      light:'#4caf50'
    },
    custom: {
      white:'#ffffff',
      grey:'#c1c5d0',
      purple:'#6768ab',
      violet:'#656291',
      blue: '#47589e',
      dark:'#0b0b2f'
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Header/>
      <About/>
    </ThemeProvider> 
  );
}

export default App;

/**
 * Portfolio Map
 * 
 * On the header section
 * - Resume link
 * - Contact info (Linkedin, Twitter, Github)
 * - Name
 * 
 * On the About me section
 * - Get words from ChatGPT
 * - Short and sweet About
 * 
 * On the skills section
 * - Icons for languages and technologies
 * 
 * On the projects section
 *  - HtoStudios
 *  - Studyhelp
 *  - Blockchain projects
 *  - Display two links for source and for live preview
 *  - Projects should have a HQ readme on Github
 * 
 * On the footer section
 *  - Contact links and resume again
 * 
 * On the blog section
 *  - When I create the HtoStudios API  I will serve blogs on my portfolio site
 * 
 * Creative tips
 * - Add icons to skills i.e. Orange HTML icon as HTML skill
 * - Domain name with projects as subdomains
 * - Dark and light theme
 * 
 * Future of Portfolio
 * - Create a contact section for freelancing and business enquiries
 * 
 * Tips and Trics 
 * - Remove dates on projects to avoid judgement
 * - Projects come before skills
 *
 * My Skills
 * Software Developer
 * Full-stack Web Developer
 * Blockchain Developer
 * 
 * Title
 * Software developer and author at HtoStudios
 * 
 * Research?
 * - How to present your freelance project on your Portfolio
 */