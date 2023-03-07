import {Card,CardMedia,CardContent,Typography,CardActions,Button} from '@mui/material';

const Project = (props) => {

    return (
        <Card sx={{
             maxWidth: 345,
             backgroundColor:'custom.purple',
             color:'custom.white'
             }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.projectName}
                </Typography>
                <Typography variant="body2" color="custom.grey">
                {props.projectDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Project;