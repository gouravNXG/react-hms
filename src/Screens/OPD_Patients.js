import { Box, Grid, InputLabel,Button, MenuItem, Paper, Select, TextField } from '@mui/material';
import React from 'react'
import LeftNavBar from '../Components/LeftNavBar';
const drawerWidth = 240;
export default function OPD_Patients() {
  return (
    <>
      <Box sx={{ display: 'flex' ,  padding: 3 }}>
        <LeftNavBar/>
         <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
           <h1>CONSULTANCY</h1>
           <Paper elevation={3}  sx={{paddingBottom: 3,backgroundColor:"#fbfbfb" ,}} >
      <Grid container spacing={2}>


        
      <Grid item xs={12} md={6} sm={6} lg={4}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 6}}>
  OPD No. <TextField id=" opdNo" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter OPD No. " sx={{ marginLeft:2,width: '250px'}} />
</InputLabel>

        </Grid>
        <Grid item xs={12} md={6} sm={6} lg={4}>
        <InputLabel htmlFor="date-picker"  sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", fontWeight: 700,paddingLeft:7,ml:3}} >Date
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
  <Grid item xs={12} md={6} sm={6} lg={4}>
  <InputLabel htmlFor="time" sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", fontWeight: 700,paddingLeft:7,ml:3}}>Time
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


  <Grid item xs={12} md={12} sm={6} lg={12}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 7}}>
  Reg No. <TextField id=" regNo" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter Registration No. " sx={{ marginLeft: 2 ,width: '250px'}} />
</InputLabel>
        </Grid>



        <Grid item xs={12} md={12} sm={12} lg={4}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 2}}>
  Patient Name

    <TextField id="patientName" name="patientName" size="small" autoComplete="off" variant="outlined" placeholder="Enter Patient Name" sx={{ marginLeft: 2, width: '300px' }} />
</InputLabel>       </Grid>
<Grid item xs={12} md={12} sm={6} lg={4}>
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
<Grid item xs={12} md={12} sm={6} lg={4}>
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
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 2}}>
  Father Name

    <TextField id="fatherName" name="fatherName" size="small" autoComplete="off" variant="outlined" placeholder="Enter Father Name" sx={{ marginLeft: 2, width: '300px' }} />
</InputLabel>       </Grid>


<Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 2}}>
  Mother Name

    <TextField id="motherName" name="motherName" size="small" autoComplete="off" variant="outlined" placeholder="Enter Mother Name" sx={{ marginLeft: 2, width: '300px' }} />
</InputLabel>       </Grid>
<Grid item xs={12} md={12} sm={12} lg={12}>

<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 1}}>
  Local Address
  <TextField id=" address" name=" address"  fullWidth size="small" autoComplete="off" variant="outlined" placeholder="Enter  Address" sx={{ marginLeft: 2,marginRight:2 }} />
</InputLabel>
</Grid>
<Grid item xs={12} md={12} sm={6} lg={6}>

<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 11}}>
  City
  <TextField id=" city" name=" city" size="small" autoComplete="off" variant="outlined" placeholder="Enter  City" sx={{ marginLeft: 2, width: '300px' }} />
</InputLabel>
</Grid>


<Grid item xs={12} md={12} sm={6} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700,paddingLeft: 2}}>
  Covid Patient
  <Select
    labelId="covid-patient-label"
    id="covidpatient"
    label="covid-patient"
    size="small"
    
    sx={{ marginLeft: 2 }} >
        <MenuItem value="first">YES </MenuItem>
        <MenuItem value="second">NO </MenuItem>
  </Select>
</InputLabel>
</Grid>

<Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft:5}}>
  Mobile No. <TextField id=" mobileNo" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter Mobile No. " sx={{ marginLeft: 2 }} />
</InputLabel>

        </Grid>

        <Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 3}}>
  Alternate No. <TextField id=" alternateNo" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter Alternate No. " sx={{ marginLeft: 2 }} />
</InputLabel>

        </Grid>
        <Grid item xs={12} md={12} sm={12} lg={6}>
          <Grid container   sx={{ml:2,paddingLeft:4}}>
          <Grid item xs={12} md={12} sm={3} lg={3}   sx={{ml:2,mt:2}}>   
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700,  }}>
  Weight
  <TextField id=" weight" name=" weight" size="small" autoComplete="off" variant="outlined"  sx={{ marginLeft: 2 }}  />
</InputLabel></Grid>
<Grid item xs={12} md={12} sm={3} lg={3}   sx={{ml:2,mt:2}}>
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700 ,  }}>
  Height
  <TextField id=" weight" name=" weight" size="small" autoComplete="off" variant="outlined" sx={{ marginLeft: 2 }}  />
</InputLabel></Grid>
<Grid item xs={6} md={12} sm={3} lg={3}  sx={{ml:2,mt:2}} >
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700,   }}>
  B.P.
  <TextField id=" bp" name=" bp" size="small" autoComplete="off" variant="outlined"  sx={{ marginLeft: 1 }}    /> /
   <TextField id=" /bp" name="/bp" size="small" autoComplete="off" variant="outlined"   />
</InputLabel></Grid>
</Grid>
</Grid>
<Grid item xs={12} md={12} sm={12} lg={6}>
<Grid container   sx={{ml:2,paddingLeft:5}}>
          <Grid item xs={12} md={12} sm={3} lg={3}   sx={{ml:2,mt:2}}>
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700,  }}>
    Temp.
    <TextField id=" temp" name=" temp" size="small" autoComplete="off" variant="outlined"  sx={{ marginLeft: 2 }}  />
</InputLabel></Grid>
<Grid item xs={12} md={12} sm={3} lg={3}   sx={{ml:2,mt:2}}>
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700 ,  }}>
  Pulse
  <TextField id=" pulse" name=" pulse" size="small" autoComplete="off" variant="outlined"  sx={{ marginLeft: 2 }}  />
</InputLabel></Grid>
<Grid item xs={12} md={12} sm={3} lg={4}  sx={{ml:1,mt:2}} >
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700,  }}>
   Heart Measure
  <TextField id=" heartMeasure" name=" heartMeasure" size="small" autoComplete="off" variant="outlined" sx={{ marginLeft: 1, }}    /> 
   </InputLabel></Grid>
</Grid>
</Grid>

<Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700,paddingLeft: 4}}>
  Consultant
  <Select
    labelId="consultant--label"
    id="consultant"
    label="Consultant"
    size="small"
    
    sx={{ marginLeft: 2 }} >
        <MenuItem value="first">Doctor 1 </MenuItem>
        <MenuItem value="second">Doctor 2 </MenuItem>
  </Select>
</InputLabel>
</Grid>
<Grid item xs={12} md={12} sm={12} lg={6}>
<Grid container>

<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 8}}>
  Ref. By 
  <Grid item xs={8} md={8} sm={8} lg={4}>
  <TextField id=" refBy" name=" refBy" size="small" autoComplete="off" variant="outlined" placeholder="Enter " sx={{ marginLeft: 2, width: '300px' }} /></Grid>
  
</InputLabel>
</Grid>
</Grid>

<Grid item xs={6} md={6} sm={6} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700,paddingLeft: 6}}>
  Last Visit
  </InputLabel>
</Grid>

<Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700,paddingLeft: 3}}>
  Type of Visit
  <Select
    labelId="typeofVisit-label"
    id="typeofVisit"
    label="typeofVisit"
    size="small"
    
    sx={{ marginLeft: 2 }} >
        <MenuItem value="first">First Time </MenuItem>
        <MenuItem value="second">NO </MenuItem>
  </Select>
</InputLabel>
</Grid>
<Grid item xs={12} md={12} sm={12} lg={12}>
<Grid container   sx={{ml:2,paddingLeft:5}}>
          <Grid item xs={12} md={12} sm={3} lg={2}   sx={{mt:2}}>
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700,  }}>
    Amount
    <TextField id=" amount" name=" amount" size="small" autoComplete="off" variant="outlined"  sx={{ marginLeft: 2 }}  />
</InputLabel></Grid>
<Grid item xs={12} md={12} sm={3} lg={2}   sx={{mt:2}}>
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700 ,paddingLeft:4,ml:1  }}>
  Dis
  <TextField id=" dis" name=" dis" size="small" autoComplete="off" variant="outlined"  sx={{ marginLeft: 2 }}  />
</InputLabel></Grid>
<Grid item xs={12} md={12} sm={3} lg={2}  sx={{ml:1,mt:2}} >
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700, ml:2  }}>
    Cash
  <TextField id=" cash" name=" cash" size="small" autoComplete="off" variant="outlined" sx={{ marginLeft: 2, }}    /> 
   </InputLabel></Grid>
   <Grid item xs={12} md={12} sm={3} lg={2}  sx={{ml:1,mt:2}} >
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700, ml:2  }}>
    Card
  <TextField id=" card" name=" card" size="small" autoComplete="off" variant="outlined" sx={{ marginLeft: 2, }}    /> 
   </InputLabel></Grid>
   
<Grid item xs={12} md={12} sm={12} lg={3} sx={{ml:1,mt:2}}  >
   <InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700,paddingLeft: 2,  }}>
    Follow Up Remark
    <Select
    labelId="followupremark-label"
    id="followupremark"
    label="followupremark"
    size="small"
    
    sx={{ marginLeft: 1 }} >
        <MenuItem value="first">First Time </MenuItem>
        <MenuItem value="second">NO </MenuItem>
  </Select>

   </InputLabel></Grid>
</Grid>
</Grid>

<Grid item xs={12} md={12} sm={12} lg={6}>
<Grid container   sx={{ml:2,paddingLeft:5}}>
          <Grid item xs={12} md={12} sm={3} lg={3}   sx={{mt:2}}>
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700,  }}>
    Balance
    <TextField id=" balance" name=" balance" size="small" autoComplete="off" variant="outlined"  sx={{ marginLeft: 2 }}  />
</InputLabel></Grid>
<Grid item xs={12} md={12} sm={3} lg={3}   sx={{ml:3,mt:2}}>
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700 ,  }}>
  Bank
  <TextField id=" bank" name=" bank" size="small" autoComplete="off" variant="outlined"  sx={{ marginLeft: 2 }}  />
</InputLabel></Grid>
<Grid item xs={12} md={12} sm={3} lg={3}  sx={{ml:4,mt:2}} >
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700,  }}>
   TPA
  <TextField id=" tpa" name=" tpa" size="small" autoComplete="off" variant="outlined" sx={{ marginLeft: 2, }}    /> 
   </InputLabel></Grid>
</Grid>
</Grid>

        </Grid>
        </Paper>
<Grid container>
<Grid item xs={12} md={6} sm={12} lg={4} sx={{marginBottom:2 ,mt:2}}>

<Button variant="contained" color="primary" style={{ marginRight: '20px' }}>
            Re-Print
          </Button></Grid>
        <Grid item xs={12} md={6} sm={12} lg={6} sx={{marginBottom:2 ,mt:2}}>
          <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>
            Save
          </Button>
          <Button variant="contained" color="secondary" style={{ marginRight: '20px' }}>
            Clear
          </Button>
        
          <Button variant="outlined" style={{ marginLeft: '20px' }}>
            Exit
          </Button>
        </Grid>
        </Grid>
           </Box>
           </Box>
    </>
  )
}
