import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from  './Main';


const theme = createTheme({
  spacing:8,
  palette: {
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
      <Main/>
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