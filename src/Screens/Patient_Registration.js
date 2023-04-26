import React, { useState } from 'react';
import { Grid, TextField, Button, Box, Paper, Select, InputLabel, MenuItem, ListItem, ListItemButton, ListItemText } from '@mui/material';
import LeftNavBar from '../Components/LeftNavBar';
import { CheckBox } from '@mui/icons-material';
import { FixedSizeList } from 'react-window';
const drawerWidth = 240;














const Patient_Registration = () => {
  


// The state to store the selected department value
const [selectedDepartment, setSelectedDepartment] = useState();
const [center, setCenter] = useState("");
const [selectedPatient,setSelectedPatient]= useState("");
const [selectedGender,setSelectedGender]= useState("");
  const handleCenterChange = (event) => {
    setCenter(event.target.value);
  };
// Handle department change
const handleDepartmentChange = (event) => {
  setSelectedDepartment(event.target.value);
};
const handlePatientChange=(e)=>
{
  setSelectedPatient(e.target.value);
}

const handleGenderChange=(e)=>{
  setSelectedGender(e.target.value);
}

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}
  return (
    <>
      
         <Box sx={{ display: 'flex' ,  padding: 3 }}>
        <LeftNavBar/>
         <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
      <h1>Test Booking Details</h1>
      <Paper elevation={3} sx={{paddingBottom: 3,backgroundColor:"#fbfbfb" ,}} >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={6} lg={3}>
        <InputLabel id="center-select-label"   sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 6,}} >Center
      <Select
        labelId="center-select-label"
        id="center-select"
        value={center}
        onChange={handleCenterChange}
        size="small"
        sx={{ marginLeft: 2 }}
      >
        <MenuItem value="emergency">Emergency Center</MenuItem>
        <MenuItem value="surgery">Surgery Center</MenuItem>
        <MenuItem value="rehabilitation">Rehabilitation Center</MenuItem>
        <MenuItem value="psychiatry">Psychiatry Center</MenuItem>
      </Select></InputLabel>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
        <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 2}}>
  Receipt No
  <TextField id="receiptNo" name="receiptNo" size="small" autoComplete="off" variant="outlined" placeholder="Enter Receipt No." sx={{ marginLeft: 2 }} />
</InputLabel>

        </Grid>
        <Grid item xs={12} md={6} sm={6} lg={3}>
      
<InputLabel id="department-label"
 sx={{display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 1,}}>
  Department
  <Select
    labelId="department-label"
    id="department"
    value={selectedDepartment}
    label="Department"
    size="small"
    
    onChange={handleDepartmentChange}
    sx={{ marginLeft: 2 }} >


<MenuItem value="emergency">Emergency </MenuItem>
        <MenuItem value="Cardiology">Cardiology </MenuItem>
        <MenuItem value="neurology">neurology </MenuItem>
        <MenuItem value="oncology">Oncology </MenuItem>
  </Select></InputLabel>
        </Grid>
        <Grid item xs={12} md={6} sm={4} lg={3}>
        
        
        <InputLabel htmlFor="date-picker"  sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", fontWeight: 700,paddingLeft: 8}} >Date
    <TextField
      id="date-picker"
      type="date"
      size="small"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      sx={{ marginLeft: 2, }}
    /> </InputLabel>
  </Grid>

  <Grid item xs={12} md={6} sm={6} lg={6}>
      

<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 5}}>
   Lab No.
  <TextField id=" labNo" name="labNo" size="small" autoComplete="off" variant="outlined" placeholder="Enter Lab No." sx={{ marginLeft: 2 }} />
</InputLabel>
        </Grid>

  <Grid item xs={12} md={6} sm={4} lg={3}>
  <InputLabel htmlFor="time" sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", fontWeight: 700,paddingLeft:8}}>Time
  <TextField
    id="time"
    type="time"
    size="small"
   fullWidth
    InputLabelProps={{
        shrink: true,
      }}
   

     sx={{ marginLeft: 2 ,}}
  /></InputLabel>
  </Grid>
  <Grid item  lg={3}/>

        <Grid item xs={12} md={6} sm={6} lg={3}>
        <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 3}}>
  Patient ID
  <TextField id="patientID" name="patientID" size="small" autoComplete="off" variant="outlined" placeholder="Enter Patient ID" sx={{ marginLeft: 2 }} />
</InputLabel>
         </Grid>
<Grid item xs={12} md={6} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, }}>
  Patient Name
  <Select
    labelId="Patient-label"
    id="Patient"
    value={selectedPatient}
    label="Patient"
    size="small"
    
    onChange={handlePatientChange}
    sx={{ marginLeft: 2 }} >
        <MenuItem value="Mr">Mr </MenuItem>
        <MenuItem value="Miss">Miss </MenuItem>
        <MenuItem value="Mrs">Mrs </MenuItem>
  </Select>
    <TextField id="patientName" name="patientName" size="small" autoComplete="off" variant="outlined" placeholder="Enter Patient Name" sx={{ marginLeft: 1, width: '300px' }} />
</InputLabel>       </Grid>
<Grid item xs={12} md={6} sm={6} lg={3}>
<InputLabel htmlFor="age-picker"  sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", fontWeight: 700,paddingLeft: 9}} >Age
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

<Grid item xs={12} md={6} sm={6} lg={3}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 6}}>
  Gender
  <Select
    labelId="Patient-label"
    id="Patient"
    value={selectedGender}
    label="Patient"
    size="small"
    
    onChange={handleGenderChange}
    sx={{ marginLeft: 2 }} >
        <MenuItem value="first">Male </MenuItem>
        <MenuItem value="second">Female </MenuItem>
        </Select>
</InputLabel>
      </Grid>



      <Grid item xs={12} md={6} sm={6} lg={3}>
       <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700,}}>
          Father/Husband
          <TextField id=" father/husband" name=" father/husband" size="small" autoComplete="off" variant="outlined" placeholder="Enter  Father/Husband " />
</InputLabel>
        
        </Grid>
        
        <Grid item xs={12} md={6} sm={6} lg={3}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 3}}>
  Mobile No. <TextField id=" mobileNo" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter Mobile No. " sx={{ marginLeft: 2 }} />
</InputLabel>

        </Grid>
        <Grid item xs={12} md={6} sm={4} lg={3}>
        <InputLabel htmlFor="dob-picker"  sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", fontWeight: 700,paddingLeft: 9}} >DOB
    <TextField
      id="dob-picker"
      type="date"
      size="small"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      sx={{ marginLeft: 2 }}
    /> </InputLabel>
        </Grid>
       
        <Grid item xs={12} md={6} sm={6} lg={6}>

        <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 5}}>
          Address
          <TextField id=" address" name=" address" size="small" autoComplete="off" variant="outlined" placeholder="Enter  Address" sx={{ marginLeft: 2, width: '400px' }} />
</InputLabel>
        </Grid>
        
        <Grid item xs={12} md={6} sm={6} lg={6}>
        <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 5}}>
          Email ID
          <TextField id=" email" name=" email" type='email' size="small" autoComplete="off" variant="outlined" placeholder="Enter  Email ID" sx={{ marginLeft: 2 , width: '400px'}} />
</InputLabel>
        </Grid>

        <Grid item xs={12} md={6} sm={6} lg={6}>
        <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 1}}>
         Referred By
          <TextField id=" ReferredBy" name=" ReferredBy"  size="small" autoComplete="off" variant="outlined" placeholder="Enter ReferredBy" sx={{ marginLeft: 2, width:"400px" }} />
</InputLabel>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
         <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 1}}> <input type="checkbox"/>
        Corporate</InputLabel>
          </Grid>
          <Grid item xs={12} md={12} sm={12} lg={12}>
          <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 4}}>
        Remarks
          <TextField id=" remarks" name=" remarks"  size="small" autoComplete="off" variant="outlined" placeholder="Enter Remarks" sx={{ marginLeft: 2 , width: '800px'}} />
</InputLabel>
   </Grid>
        </Grid>
        </Paper>
       
        <Paper elevation={5} sx={{marginTop: 5, backgroundColor:"#fbfbfb" }} >
        <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={4}>
          
<Box>
        <TextField  id=" testName" name=" testName"  size="small" autoComplete="off" variant="outlined"  sx={{ width: '300px'}}></TextField>
    <Box   
      sx={{ width: '100%', height: 240, maxWidth: 300, backgroundColor:"#c4dcdc" , marginLeft: 5 }}
    >
      <InputLabel id="testName-select-label"   sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 2,}} >Test Name
   </InputLabel>
      
      <FixedSizeList
        height={240}
        width={300}
        itemSize={46}
        itemCount={20}
        overscanCount={5}
        sx={{ marginLeft: 2 , width: '400px'}}

        elevation={18}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
    </Box>
         
</Grid>
<Grid item xs={12} md={12} sm={12} lg={4}>
<InputLabel  sx={{ display: "flex", fontWeight: 700, paddingLeft: 2,}} >Test Name  
   </InputLabel>
<Box   
      sx={{ width: '100%', height: 240, maxWidth: 300, backgroundColor:"#c4dcdc" , marginLeft: 2 , marginTop:2}}
    ></Box>
    </Grid>
    <Grid item xs={12} md={12} sm={12} lg={4}  sx={{marginTop:5}}>
    <InputLabel  sx={{ display: "flex",alignItems: "center", paddingLeft: 6,}} >Total Tests 
    <TextField  id=" totalTest" name=" totalTest"  size="small" autoComplete="off" variant="outlined"  sx={{  marginLeft:2, marginBottom:1, width: '200px'}}></TextField></InputLabel>
    <InputLabel  sx={{ display: "flex",alignItems: "center", paddingLeft: 4,}} >Test Amount  
    <TextField  id=" testAmount" name=" testAmount"  size="small" autoComplete="off" variant="outlined"  sx={{  marginLeft:2, marginBottom:1, width: '200px'}}></TextField></InputLabel>
    <InputLabel  sx={{ display: "flex",alignItems: "center", paddingLeft: 5,}} >Concession 
    <TextField  id=" concession" name=" concession"  size="small" autoComplete="off" variant="outlined"  sx={{  marginLeft:2,marginBottom:1,  width: '200px'}}></TextField></InputLabel>
    <InputLabel  sx={{ display: "flex",alignItems: "center", paddingLeft:1}} >Home Collection
    <TextField  id=" homeCollection" name=" homeCollection"  size="small" autoComplete="off" variant="outlined"  sx={{  marginLeft:2, marginBottom:1, width: '200px'}}></TextField></InputLabel>
    <InputLabel  sx={{ display: "flex",alignItems: "center", paddingLeft: 5,}} >Net Amount
    <TextField  id=" netAmount" name=" netAmount"  size="small" autoComplete="off" variant="outlined"  sx={{  marginLeft:2, marginBottom:1, width: '200px'}}></TextField></InputLabel>
    <InputLabel  sx={{ display: "flex",alignItems: "center", paddingLeft: 8,}} >Balance
    <TextField  id=" homeCollection" name=" homeCollection"  size="small" autoComplete="off" variant="outlined"  sx={{  marginLeft:2, marginBottom:1, width: '200px'}}></TextField>
   </InputLabel>
    </Grid>
    <Grid item xs={12} md={12} sm={12} lg={4}>
    <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 2}}>
          Home Collection Charges
          <TextField id=" collectionCharges" name=" collectionCharges" size="small" autoComplete="off" variant="outlined" placeholder="Enter  Address" sx={{ marginLeft: 4, width: '400px' }} />
</InputLabel>
    </Grid>
    <Grid item xs={12} md={12} sm={12} lg={4}>
    <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 2}}>
          Paid
          <TextField id=" Paid" name=" Paid" size="small" autoComplete="off" variant="outlined" placeholder="Enter  Address" sx={{ marginLeft: 4, width: '400px' }} />
</InputLabel>
    </Grid>
    <Grid item xs={12} md={12} sm={12} lg={4}>
    <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 2}}>
          Pay Type
          <select>
            <option value={"UPI"}></option>
          </select>
          </InputLabel>
        </Grid>

        <Grid item xs={12} md={6} sm={12} lg={4}>
        <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 2}}>
          Concession
          <TextField id=" Concession" name=" Concession" size="small" autoComplete="off" variant="outlined" placeholder="Enter  Address" sx={{ marginLeft: 4, width: '400px' }} />
</InputLabel>
              </Grid>



        <Grid item xs={12} md={6} sm={12} lg={12} sx={{marginBottom:2}}>
          <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>
            Save
          </Button>
          <Button variant="contained" color="secondary" style={{ marginRight: '20px' }}>
            Clear
          </Button>
          <Button variant="contained">Search</Button>
          <Button variant="outlined" style={{ marginLeft: '20px' }}>
            Exit
          </Button>
        </Grid>


        </Grid>
      </Paper>
      </Box>
      </Box>
    
    </>
  );
};



export default Patient_Registration;



