import {Box,Grid,Typography} from '@mui/material';

const Skill = (props) => {
    return (
        <Box sx={{
            p:1,
            m:1,
            borderRadius: '16px',
            width:'190px',
            height:'90px',
            backgroundColor:'custom.blue',
            color:'custom.white'
        }} key={props.key}>
            <Grid container spacing={1} columns={16}>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                    <Box sx={{
                        p:1,
                        display: 'flex',
                        justifyContent: 'center',
                        width: "75%",
                        height:"75%"
                    }}>
                        <img src={props.source} alt={props.alt} title={props.title} sx={{ width: "100%", height: "100%" }}/>
                    </Box>   
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                    <Box sx={{
                        p:2,
                        m:1,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Typography variant='body1'>{props.title}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Skill;