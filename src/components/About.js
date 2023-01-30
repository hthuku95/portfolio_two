import {Container,Grid,Typography} from "@mui/material";

const About = () =>{
    return (
        <Container id='section2'>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height="100vh">
                <Typography variant="h3">
                        About Me
                    </Typography>
                </Grid>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height="100vh">
                    <Typography variant="body1" sx={{ p: 10 }}>
                        I'll wait forever, thats what we said, 16th of september lying in my bed
                        I'll wait forever, thats what we said, 16th of september lying in my bed
                        I'll wait forever, thats what we said, 16th of september lying in my bed
                        I'll wait forever, thats what we said, 16th of september lying in my bed
                        I'll wait forever, thats what we said, 16th of september lying in my bed
                        I'll wait forever, thats what we said, 16th of september lying in my bed
                        I'll wait forever, thats what we said, 16th of september lying in my bed
                        I'll wait forever, thats what we said, 16th of september lying in my bed
                        I'll wait forever, thats what we said, 16th of september lying in my bed
                        I'll wait forever, thats what we said, 16th of september lying in my bed
                        I'll wait forever, thats what we said, 16th of september lying in my bed
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;