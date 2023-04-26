import React from 'react'
import { Grid, TextField, Button, Box, Paper, Select, InputLabel, MenuItem, ListItem, ListItemButton, ListItemText } from '@mui/material';
import LeftNavBar from '../Components/LeftNavBar';
const drawerWidth = 240;
export default function Patient_Admission_Regular() {
  return (
    <>
    
    <Box sx={{ display: 'flex' ,  padding: 3 }}>
        <LeftNavBar/>
         <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
      <h1>Patient_Admission_Regular</h1>
      <Paper elevation={3}  sx={{paddingBottom: 3,backgroundColor:"#fbfbfb" ,}} >
      <Grid container spacing={2}>


        
      <Grid item xs={12} md={6} sm={6} lg={3}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 8}}>
  IPD No. <TextField id=" ipdNo" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter IPD No. " sx={{ marginLeft:2,width: '250px'}} />
</InputLabel>
        </Grid>
        <Grid item xs={12} md={12} sm={6} lg={3}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 7}}>
  Reg. No. <TextField id=" regNo" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter Registration No. " sx={{ marginLeft: 2 ,width: '250px'}} />
</InputLabel>
        </Grid>
        <Grid item xs={12} md={6} sm={6} lg={3}>
        <InputLabel htmlFor="date-picker"  sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", fontWeight: 700,paddingLeft:11}} >Date
    <TextField
      id="date-picker"
      type="date"
      size="small"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      sx={{marginLeft:2 }}
    /> </InputLabel>
  </Grid>
  <Grid item xs={12} md={6} sm={6} lg={3}>
  <InputLabel htmlFor="time" sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", fontWeight: 700,paddingLeft:11}}>Time
  <TextField
    id="time"
    type="time"
    size="small"
   
    InputLabelProps={{
        shrink: true,
      }}
    fullWidth

     sx={{ marginLeft: 2 ,}}
  /></InputLabel>
  </Grid>


  <Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 5}}>
  First Name

    <TextField id="firstName" name="firstName" size="small" autoComplete="off" variant="outlined" placeholder="Enter First Name" sx={{ marginLeft: 2, width: '300px' }} />
</InputLabel>       </Grid>


<Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 5}}>
  Last Name

    <TextField id="lastrName" name="lastName" size="small" autoComplete="off" variant="outlined" placeholder="Enter Last Name" sx={{ marginLeft: 2, width: '300px' }} />
</InputLabel>       </Grid>

<Grid item xs={12} md={12} sm={6} lg={3}>
<InputLabel htmlFor="age-picker"  sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", fontWeight: 700,paddingLeft:7,ml:4}} >Age
    <TextField
      id="age-picker"
      type="number"
      size="small"
fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      sx={{ marginLeft: 2 }}
    /> </InputLabel>
</Grid>
<Grid item xs={12} md={12} sm={6} lg={3}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700,paddingLeft:7,ml:4}}>
  Sex
  <Select
    labelId="gender-label"
    id="gender"
    label="gender"
    size="small"
   
    sx={{ marginLeft: 2 }} >
        <MenuItem value="first">Male </MenuItem>
        <MenuItem value="second">Female </MenuItem>
  </Select>
</InputLabel>
</Grid>
<Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 1}}>
  Relative Name

    <TextField id="relativeName" name="relativeName" size="small" autoComplete="off" variant="outlined" placeholder="Enter  Name" sx={{ marginLeft: 2, width: '300px' }} />
</InputLabel>       </Grid>


<Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 3}}>
  Father Name

    <TextField id="fatherName" name="fatherName" size="small" autoComplete="off" variant="outlined" placeholder="Enter Father Name" sx={{ marginLeft: 2, width: '300px' }} />
</InputLabel>       </Grid>


<Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 3}}>
  Mother Name

    <TextField id="motherName" name="motherName" size="small" autoComplete="off" variant="outlined" placeholder="Enter Mother Name" sx={{ marginLeft: 2, width: '300px' }} />
</InputLabel>       </Grid>

<Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 4}}>
Occupation

    <TextField id="occupation" name="occupation" size="small" autoComplete="off" variant="outlined" placeholder="Enter occupation" sx={{ marginLeft: 2, width: '300px' }} />
</InputLabel>       </Grid>

  <Grid item xs={12} md={6} sm={6} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 5}}>
  Phone No. <TextField id=" phoneNo" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter Phone No. " sx={{ marginLeft: 2 }} />
</InputLabel>
        </Grid>
        <Grid item xs={12} md={6} sm={6} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 5}}>
  Mobile No. <TextField id=" mobileNo" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter Mobile No. " sx={{ marginLeft: 2 }} />
</InputLabel>
        </Grid>
        <Grid item xs={12} md={6} sm={6} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 6}}>
  Resi. No. <TextField id=" resiNo" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter " sx={{ marginLeft: 2 }} />
</InputLabel>
        </Grid>

  <Grid item xs={12} md={12} sm={6} lg={3}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700,paddingLeft:10}}>
  State
  <Select
    labelId="state-label"
    id="state"
    label="state"
    size="small"
   
    sx={{ marginLeft: 2 }} >
        <MenuItem value="first">cg </MenuItem>
        <MenuItem value="second">mp </MenuItem>
  </Select>
</InputLabel>
</Grid>
<Grid item xs={12} md={12} sm={6} lg={3}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700,paddingLeft:7,ml:4}}>
  City
  <Select
    labelId="city-label"
    id="city"
    label="city"
    size="small"
   
    sx={{ marginLeft: 2 }} >
        <MenuItem value="first">rpr </MenuItem>
        <MenuItem value="second">durg </MenuItem>
  </Select>
</InputLabel>
</Grid>
<Grid item xs={12} md={6} sm={6} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 7}}>
  Pincode <TextField id=" pincode" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter  Pincode " sx={{ marginLeft: 2 }} />
</InputLabel>
        </Grid>



        
        <Grid item xs={12} md={12} sm={12} lg={12}>

<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 1}}>
   Local Address
  <TextField id=" localaddress" name=" localaddress" size="small" autoComplete="off" variant="outlined" fullWidth placeholder="Enter Local Address" sx={{ marginLeft: 2, width: '400px' }} />
</InputLabel>
</Grid>
<Grid item xs={12} md={12} sm={12} lg={12}>

<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 1}}>
 Permanent Address
  <TextField id="permanentaddress" name=" permanentaddress" size="small" autoComplete="off" fullWidth variant="outlined" placeholder="Enter Permanent  Address" sx={{ marginLeft: 2, width: '400px' }} />
</InputLabel>
</Grid>



</Grid>
</Paper>
      </Box>
      </Box>

    </>
  )
}
