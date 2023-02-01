import  React,{ useState} from 'react';
import {Toolbar,Typography,Button,ListItemText,ListItem,ListItemButton,List,IconButton,Drawer,Divider,Box,AppBar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, animateScroll as scroll } from "react-scroll";


const drawerWidth = 240;
const navItems = [
  <Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}> 
    Home     
  </Link>,
  <Link
    activeClass="active"
    to="section2"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}> 
    Skills   
  </Link>,
    <Link
    activeClass="active"
    to="section3"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}> 
    Projects 
  </Link>,
  <Link
    activeClass="active"
    to="section4"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}> 
    About    
  </Link>
]

const Nav = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ my: 2, p: 2 }}>
        Harry Thuku
      </Typography>
      <Divider />
      <List>
        {navItems.map((item)=>(
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText>
                  {item}
                </ListItemText>
              </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{
            backgroundColor:"custom.dark",
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ p: 2, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Harry Thuku
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Nav;