import { Container, Typography, Box, Grid, Fade } from "@mui/material";
import Skill from "./Skill";
import useInView from '../hooks/useInView';

const sources = [
  { id: 0,  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",    alt: "Solidity",    title: "Solidity" },
  { id: 1,  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",         alt: "Python",      title: "Python" },
  { id: 2,  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript",  title: "JavaScript" },
  { id: 3,  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript",  title: "TypeScript" },
  { id: 4,  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",           alt: "React.js",    title: "React.js" },
  { id: 5,  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",         alt: "Next.js",     title: "Next.js" },
  { id: 6,  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",             alt: "Django",      title: "Django" },
  { id: 7,  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",         alt: "Node.js",     title: "Node.js" },
  { id: 8,  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",       alt: "Express.js",  title: "Express.js" },
  { id: 9,  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL",  title: "PostgreSQL" },
  { id: 10, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",       alt: "MongoDB",     title: "MongoDB" },
  { id: 11, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",           alt: "HTML",        title: "HTML" },
  { id: 12, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",             alt: "CSS",         title: "CSS" },
  { id: 13, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",   alt: "Bootstrap",   title: "Bootstrap" },
  { id: 14, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", alt: "MaterialUI",  title: "MaterialUI" },
  { id: 15, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",               alt: "Git",         title: "Git" },
  { id: 16, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",         alt: "Github",      title: "Github" },
  { id: 17, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",         alt: "Gitlab",      title: "Gitlab" },
];

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <Container id='section4' ref={ref} sx={{ py: { xs: 6, md: 8 } }}>
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h3"
          align="left"
          sx={{
            color: 'custom.blue',
            paddingBottom: '16px',
            borderBottom: 4,
            display: 'inline-block',
            width: 'fit-content',
            mb: 5,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
          gutterBottom
        >
          Skills
        </Typography>

        <Grid container spacing={2}>
          {sources.map((source, index) => (
            <Grid key={source.id} item xs={6} sm={4} md={3} lg={2}>
              <Fade in={isInView} timeout={300 + index * 80}>
                <Box>
                  <Skill source={source.src} alt={source.alt} title={source.title} />
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills;
