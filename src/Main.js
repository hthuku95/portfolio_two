import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import {Box} from '@mui/material';

const Main = ()=>{

    return (
        <Box>
            <Nav />
            <Header />
            <About />
            <Skills />
        </Box>
    )
}

export default Main;