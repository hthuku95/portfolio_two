import {Container,Grid,Typography} from "@mui/material";

const About = () =>{
    return (
        <Container id='section4' >
            <Grid container spacing={2} columns={16}>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height='100vh'>
                    <Typography variant="h3">About Me</Typography>
                </Grid>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} >
                    <Typography variant="body1" sx={{ p:4 }} gutterBottom='true'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit eu auctor convallis, lacus massa feugiat lectus, eget bibendum est nisi vel erat. Maecenas vitae dolor placerat, vestibulum quam non, mollis sapien. Integer suscipit, lectus non euismod malesuada, libero sapien laoreet orci, ac faucibus sem elit at metus. Suspendisse potenti. Nam libero dui, aliquam id laoreet ac, rutrum at sem. Aliquam erat volutpat. Nunc porttitor varius diam, id laoreet odio bibendum in.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit eu auctor convallis, lacus massa feugiat lectus, eget bibendum est nisi vel erat. Maecenas vitae dolor placerat, vestibulum quam non, mollis sapien. Integer suscipit, lectus non euismod malesuada, libero sapien laoreet orci, ac faucibus sem elit at metus. Suspendisse potenti. Nam libero dui, aliquam id laoreet ac, rutrum at sem. Aliquam erat volutpat. Nunc porttitor varius diam, id laoreet odio bibendum in.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit eu auctor convallis, lacus massa feugiat lectus, eget bibendum est nisi vel erat. Maecenas vitae dolor placerat, vestibulum quam non, mollis sapien. Integer suscipit, lectus non euismod malesuada, libero sapien laoreet orci, ac faucibus sem elit at metus. Suspendisse potenti. Nam libero dui, aliquam id laoreet ac, rutrum at sem. Aliquam erat volutpat. Nunc porttitor varius diam, id laoreet odio bibendum in.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;