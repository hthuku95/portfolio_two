import { Card, CardMedia, CardContent, Typography, CardActions, Link, Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Chip from '@mui/material/Chip';

const Project = (props) => {
  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: 'custom.purple',
        color: 'custom.white',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 12px 28px rgba(0,0,0,0.35)',
        },
      }}
    >
      <CardMedia
        sx={{ height: 160 }}
        image={props.imageSrc}
        title={props.projectName}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.projectName}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Chip
            label={props.projectTag}
            size="small"
            sx={{ color: 'custom.white', backgroundColor: 'custom.blue' }}
          />
          <Box sx={{ display: 'inline-flex', gap: 0.5 }}>
            {props.languageOne}
            {props.languageTwo}
            {props.languageThree}
            {props.languageFour}
            {props.languageFive}
          </Box>
        </Box>
        <Typography variant="body2" color="custom.grey">
          {props.projectDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
        <Link href={props.githubLink} underline="none" color="custom.white" sx={{ flex: 1 }}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<GitHubIcon fontSize="small" />}
            sx={{
              backgroundColor: 'custom.dark',
              '&:hover': { backgroundColor: 'custom.dark', opacity: 0.85 },
            }}
          >
            Source
          </Button>
        </Link>
        <Link href={props.liveLink} underline="none" color="custom.white" sx={{ flex: 1 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<VisibilityIcon fontSize="small" />}
            sx={{
              color: 'custom.white',
              borderColor: 'custom.white',
              '&:hover': { borderColor: 'custom.grey', opacity: 0.85 },
            }}
          >
            Live
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Project;
