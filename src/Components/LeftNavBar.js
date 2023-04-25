// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { AccountBox, PeopleAlt, AttachMoney, AddBox } from '@mui/icons-material';

// const navLinks = [
//   { title: 'Patient Registration', icon: <AddBox />, path: '/patient-registration' },
//   { title: 'OPD Patients', icon: <PeopleAlt />, path: '/opd-patients' },
//   { title: 'IPD Patients', icon: <AccountBox />, path: '/ipd-patients' },
//   { title: 'OPD Billing', icon: <AttachMoney />, path: '/opd-billing' },
// ];

// const LeftNavbar = () => {
//   const [open, setOpen] = React.useState(false);

//   const handleDrawer = () => {
//     setOpen(!open);
//   };

//   return (
//     <div>
//       <Drawer anchor="left" open={open} onClose={handleDrawer}>
//         <List>
//           {navLinks.map((link) => (
//             <ListItem button key={link.title} component={Link} to={link.path}>
//               <ListItemIcon>{link.icon}</ListItemIcon>
//               <ListItemText primary={link.title} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <button onClick={handleDrawer}>Open Navbar</button>
//     </div>
//   );
// };

// export default LeftNavbar;

// import React from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { PersonAdd, AccountBox, LocalHospital, MonetizationOn } from '@mui/icons-material';

// const LeftNavBar = () => {
//   // const [open, setOpen] = React.useState(true);

//   // const handleDrawer = () => {
//   //   setOpen(open);
//   // };

//   const navLinks = [
//     { title: 'Patient Registration', path: '/patient-registration', icon: <PersonAdd /> },
//     { title: 'OPD Patients', path: '/opd-patients', icon: <AccountBox /> },
//     { title: 'IPD Patients', path: '/ipd-patients', icon: <LocalHospital /> },
//     { title: 'OPD Billing', path: '/opd-billing', icon: <MonetizationOn /> },
//   ];

//   return (
//     <div>
//       <Drawer anchor="left"
//        >
//         <List>
//           {navLinks.map((link) => (
//             <ListItem button key={link.title} component={Link} to={link.path}>
//               <ListItemIcon>{link.icon}</ListItemIcon>
//               <ListItemText primary={link.title} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </div>
//   );
// };

// export default LeftNavBar;

// import React from 'react';
// import {
//   AppBar,
//   Box,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import PeopleIcon from '@mui/icons-material/People';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import { Link } from 'react-router-dom';

// const LeftNavBar = () => {
//   const [open, setOpen] = React.useState(false);

//   const handleDrawer = () => {
//     setOpen(!open);
//   };
// <Toolbar/>
//   const navLinks = [
//     {
//       title: 'Patient-Registration',
//       path: '/Patient-Registration',
//       icon: <HomeIcon />,
//     },
//     {
//       title: 'OPD Patients',
//       path: '/opd-patients',
//       icon: <PeopleIcon />,
//     },
//     {
//       title: 'IPD Patients',
//       path: '/ipd-patients',
//       icon: <PeopleIcon />,
//     },
//     {
//       title: 'OPD Billing',
//       path: '/opd-billing',
//       icon: <AttachMoneyIcon />,
//     },
//   ];

//   return (
//     <div>
//       <AppBar position="fixed">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawer}
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <ListItemText primary="My App" />
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={open} onClose={handleDrawer}>
//       <Box sx={{ overflow: 'auto' }} >
//         <List>
//           {navLinks.map((link) => (
//             <ListItem
//               button
//               key={link.title}
//               component={Link}
//               to={link.path}
//               onClick={handleDrawer}
//             >
//               <ListItemIcon>{link.icon}</ListItemIcon>
//               <ListItemText primary={link.title} />
//             </ListItem>
//           ))}
//         </List>
//         </Box>
//       </Drawer>
//     </div>
//   );
// };

// export default LeftNavBar;

import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import {
  useParams,
  useLocation,
  useSearchParams,
  useNavigate,
  NavLink,
} from "react-router-dom";
import { Link } from "react-router-dom";
import HMSAppBar from "./HMSAppBar";

const drawerWidth = 240;

function LeftNavBar(props) {
  console.log("props", props);

  const { params } = useParams();
  // const { compo } = params;
  // const path = window.location.pathname

  const location = useLocation();
  const path = location.pathname;
  console.warn("params", location.pathname);
  const searchparams = new URLSearchParams(location.search);

  console.warn("params", { params });
  console.warn("searchparams", searchparams);

  let type = searchparams.get("type");
  // const [searchparams,setSearchParams]=useSearch
  console.log("params", searchparams.get("type"));

  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const get_props = (data) => {
    console.log("child_props", data);
    setMobileOpen(data);
  };

  const data = [
    
    {
      title: "Patient-Registration",
      path: "/Patient-Registration",
      icon: <PeopleIcon />,
    },
    {
      title: "OPD Patients",
      path: "/opd-patients",
      icon: <PeopleIcon />,
    },
    {
      title: "IPD Patients",
      path: "/ipd-patients",
      icon: <PeopleIcon />,
    },
    {
      title: "OPD Billing",
      path: "/opd-billing",
      icon: <AttachMoneyIcon />,
    },
  ];
  const drawer = (
    <div>
      <Box sx={{ overflow: "auto" }}>
        <List>
        <h4><HomeIcon />WE CARE</h4>

  
          {data.map((text, index) => (
           <ListItem key={index} disablePadding className={path === text.path ? "mshover active" : "mshover"} component={Link} to={text.path}>

             
              <ListItemButton>
                <ListItemIcon>{text.icon}</ListItemIcon>

                <ListItemText
                  primary={text.title}
                  onClick={() => setMobileOpen(!mobileOpen)}
                />
              </ListItemButton>
   
            </ListItem>
          ))}
        </List>
        <Divider />
        <List></List>
      </Box>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {}, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />

        <HMSAppBar func={get_props} />
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Toolbar />
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}
LeftNavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default LeftNavBar;
