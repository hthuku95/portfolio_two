import React, { useState, useEffect } from 'react';
import {
  Toolbar, Typography, Button, ListItemText, ListItem,
  ListItemButton, List, IconButton, Drawer, Divider, Box, AppBar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-scroll";

const drawerWidth = 240;

const navItems = [
  { label: 'Home', to: 'section1' },
  { label: 'About', to: 'section2' },
  { label: 'Projects', to: 'section3' },
  { label: 'Skills', to: 'section4' },
  { label: 'Contact', to: 'section5' },
];

const Nav = (props) => {
  const { window: windowProp } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const navLink = (item) => (
    <Link
      key={item.to}
      activeClass="active"
      to={item.to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {item.label}
    </Link>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ my: 2, p: 2 }}>
        devThuku
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>{navLink(item)}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = windowProp !== undefined ? () => windowProp().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: 'custom.dark',
          transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
        }}
      >
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
            variant="h5"
            component="div"
            sx={{ p: 2, flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: 700 }}
          >
            devThuku
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 0.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                sx={{
                  color: '#fff',
                  transition: 'opacity 0.2s ease',
                  '&:hover': { opacity: 0.75 },
                }}
              >
                {navLink(item)}
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
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Box sx={{ backgroundColor: 'custom.blue', color: 'custom.white', height: '100vh' }}>
            {drawer}
          </Box>
        </Drawer>
      </Box>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Nav;
