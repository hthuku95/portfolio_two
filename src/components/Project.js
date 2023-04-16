import {Card,CardMedia,CardContent,Typography,CardActions,Link,Button,Box} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Chip from '@mui/material/Chip';


const Project = (props) => {

    return (
        <Card sx={{
             maxWidth: 345,
             backgroundColor:'custom.purple',
             color:'custom.white'
             }}>
            <CardMedia
                sx={{ height: 140 }}
                image={props.imageSrc}
                title={props.projectName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.projectName}
                </Typography>
                <Box>
                    <Typography gutterBottom variant='body1' component="div" sx={{
                        display: 'inline-flex',
                        width:1,
                        justifyContent: 'flex-start'
                    }}>
                        <Chip label={props.projectTag} />
                    </Typography>
                    <Typography guterBottom variant="h5" component="div" sx={{
                        display: 'inline-flex',
                        width:1,
                        justifyContent: 'flex-end'
                    }}>
                        <Box pl={1}>
                            {props.languageOne}
                        </Box>
                        <Box pl={1}>
                            {props.languageTwo}
                        </Box>
                        <Box pl={1}>
                            {props.languageThree}
                        </Box>
                        <Box pl={1}>
                            {props.languageFour}
                        </Box>
                        <Box pl={1}>
                            {props.languageFive}
                        </Box>
                    </Typography>
                </Box>
                <Typography variant="body2" color="custom.grey">
                {props.projectDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={props.githubLink} underline="none"  color="custom.white" sx={{

                }}>
                    <Button variant="contained" sx={{
                        padding:'16px',
                        marginBottom:'16px',
                        backgroundColor:'custom.dark',
                        '&:hover': {
                            backgroundColor: 'custom.dark',
                          },
                    }}>
                        <GitHubIcon fontSize='small'/>
                        <Typography variant="body2" sx={{
                            paddingLeft:'8px'
                        }}>Source Code</Typography>
                    </Button>
                </Link>
                <Link href={props.liveLink} underline="none"color="custom.white">
                    <Button variant="outlined" sx={{
                        color:'custom.white',
                        borderColor:'custom.white',
                        '&:hover': {
                            borderColor: 'custom.white',
                          },
                        padding:'16px',
                        marginBottom:'16px'
                    }}>
                        <VisibilityIcon fontSize='small'/>
                        <Typography variant="body2" sx={{
                            paddingLeft:'8px'
                        }}>Live Preview</Typography>
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default Project;