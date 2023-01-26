import { Toolbar, Typography, AppBar } from '@mui/material';


const Nav = () => {

    return (
        <AppBar className='appBar' position='relative' sx={{
            backgroundColor:"secondary.main",
            color:"custom.white"
        }}>
            <Toolbar>
                <Typography variant='h4' sx={{ p: 2 }} color='inherit' noWrap>
                    Harry Thuku
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;