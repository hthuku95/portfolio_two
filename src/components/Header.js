import {Container,Grid,Typography,Box} from "@mui/material";

const Header = () => {
    return (
        <Container id='section1'>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height="100vh">
                    <Typography variant="h2" sx={{ p: 4 }}>
                        Full Stack Web & Blockchain Developer
                    </Typography>
                    <Box>
                        Social media icons go here
                    </Box>
                </Grid>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height="100vh">
                  
                </Grid>
            </Grid>
        </Container>
    )
}

export default Header;