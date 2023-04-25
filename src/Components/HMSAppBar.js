import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';




function HMSAppBar(prop) {
    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
         prop.func(!mobileOpen);
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Container maxWidth="xl">
               
                    <IconButton
                        size="large"
                        aria-label="open draawer"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, }}
                      
                        color="inherit"
                    >
                        <MenuIcon />
            
                    </IconButton>

    
            </Container>
        </AppBar>
    );
}
export default HMSAppBar;