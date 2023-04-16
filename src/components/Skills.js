import {Container,Typography,Box,Grid} from "@mui/material";
import Skill from "./Skill";

const Skills = () => {

    let sources = [
        {
            "id":0,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
            "alt":"The Logo for Solidity",
            "title":"Solidity"
        },
        {
            "id":1,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            "alt":"The Logo for Python",
            "title":"Python"
        },
        {
            "id":2,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "alt":"The Logo for JavaScript",
            "title":"JavaScript"
        },
        {
            "id":3,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            "alt":"The Logo for TypeScript",
            "title":"TypeScript"
        },
        {
            "id":4,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "alt":"The Logo for React.js",
            "title":"React.js"
        },
        {
            "id":5,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            "alt":"The Logo for Next.js",
            "title":"Next.js"
        },
        {
            "id":6,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            "alt":"The Logo for Django",
            "title":"Django"
        },
        {
            "id":7,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            "alt":"The Logo for Node.js",
            "title":"Node.js"
        },
        {
            "id":8,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            "alt":"The Logo for Express.js",
            "title":"Express.js"
        },
        {
            "id":9,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            "alt":"The Logo for PostgreSQL",
            "title":"PostgreSQL"
        },
        {
            "id":10,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            "alt":"The Logo for MongoDB",
            "title":"MongoDB"
        },
        {
            "id":11,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            "alt":"The Logo for HTML",
            "title":"HTML"
        },
        {
            "id":12,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            "alt":"The Logo for CSS",
            "title":"CSS"
        },
        {
            "id":13,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            "alt":"The Logo for Bootstrap",
            "title":"Bootstrap"
        },
        {
            "id":14,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
            "alt":"The Logo for MaterialUI",
            "title":"MaterialUI"
        },
        {
            "id":15,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            "alt":"The Logo for Git",
            "title":"Git"
        },
        {
            "id":16,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            "alt":"The Logo for Github",
            "title":"Github"
        },
        {
            "id":17,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
            "alt":"The Logo for Gitlab",
            "title":"Gitlab"
        }
        /**
        {
            "id":18,
            "src":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
            "alt":"The Logo for Digital Ocean",
            "title":"Digitalocean"
        }
         */
    ]

    return (
        <Container id='section4' align='center' gutterBottom='true'>
            <Box sx={{marginBottom:'60px'}}>
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
                    Skills
                </Typography>
                <Box sx={{
                    display:'flex',
                    flexWrap: 'wrap'
                }}>
                    <Grid container spacing={3} columns={18}>
                        {sources.map((source) => (
                            <Grid item xs={9} sm={6} md={3} lg={3} xl={3}>
                                <Skill source={source.src} alt={source.alt} title={source.title} key={source.id} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>  
            </Box>
        </Container>
    )
}

export default Skills;

/**
Solidity
Python
Javascript
TypeScript
React.js
Next.js
Django
Node.js
Express.js
Postgresql
MongoDB
HTML
CSS 
Bootstrap
mui
GIT*/