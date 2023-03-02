import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Blog from './components/Blog';
import {Box} from '@mui/material';

const Main = ()=>{

    return (
        <Box sx={{backgroundColor:"custom.grey"}}>
            <Nav />
            <Header />
            <Skills />
            <Projects/>
            <About />
            <Blog />
            <Footer/>
        </Box>
    )
}

export default Main;