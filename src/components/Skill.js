import {Box} from '@mui/material';

const Skill = (props) => {
    return (
        <Box sx={{
            p:2,
            m:2,
            borderRadius: '16px',
            width:'100px',
            height:'100px'
        }} key={props.key}>
            <img src={props.source} alt={props.alt} title={props.title} style={{ width: "100%", height: "100%" }}/>
        </Box>
    )
}

export default Skill;