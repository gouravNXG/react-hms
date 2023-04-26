import { Box } from '@mui/material'
import React from 'react'
const drawerWidth=240;
export default function IPD_Patients() {
  return (
    <div>
        <Box sx={{ display: 'flex' }}>
        
        <Box component="main" sx={{ flexGrow: 1, p: 5, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
           <h1>IPD_Patients</h1>
           </Box>
           </Box>
    </div>
  )
}
