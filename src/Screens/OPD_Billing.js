import React from 'react'
import { Grid, TextField, Button, Box, Paper, Select, InputLabel, MenuItem, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import LeftNavBar from '../Components/LeftNavBar';
const drawerWidth = 240;


function createData(name, ) {
  return { name,  };
}









export default function OPD_Billing() {
  
  return (
    <>
    <Box sx={{ display: 'flex' ,  padding: 3 }}>
        <LeftNavBar/>
         <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
         <h1>OPD Billing</h1>
         <Paper elevation={3} sx={{paddingBottom: 3,backgroundColor:"#fbfbfb" ,}} >
      <Grid container spacing={2}>
      <Grid item xs={12} md={6} sm={6} lg={4}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 8,
                  }}
                >
                  Bill No.
                  <TextField
                    id=" billNo"
                    type="number "
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder="Enter Bill No. "
                    sx={{ marginLeft: 2, width: "300px" }}
                  />
                </InputLabel>
              </Grid>
              <Grid item xs={12} md={12} sm={6} lg={4} >
               
                <InputLabel
                  htmlFor="date-picker"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    fontWeight: 700,
                    paddingLeft: 11,
                  }}
                >
                  Date
                  <TextField
                    id="date-picker"
                    type="date"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ marginLeft: 2}}
                  />
                </InputLabel>
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={4} sx={{ mt: 2 }}>
                <InputLabel
                  htmlFor="time"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    fontWeight: 700,
                    paddingLeft: 11,
                  }}
                >
                  Time
                  <TextField
                    id="time"
                    type="time"
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    sx={{ marginLeft: 2 }}
                  />
                </InputLabel>
              </Grid>

              <Grid item xs={12} md={12} sm={6} lg={12} sx={{ mt: 2 }}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 7,
                  }}
                >
                  Reg. No.{" "}
                  <TextField
                    id=" regNo"
                    type="number "
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder="Enter Registration No. "
                    sx={{ marginLeft: 2, width: "250px" }}
                  />
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

<Grid item xs={12} md={12} sm={12} lg={12}>

<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 1}}>
  Local Address
  <TextField id=" address" name=" address"  fullWidth size="small" autoComplete="off" variant="outlined" placeholder="Enter  Address" sx={{ marginLeft: 2,marginRight:2 }} />
</InputLabel>
</Grid>
<Grid item xs={12} md={12} sm={12} lg={12}>

<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 11}}>
  City 
  <TextField id=" city" name=" city"   size="small" autoComplete="off" variant="outlined" placeholder="Enter  City" sx={{ marginLeft: 2,marginRight:2 }} />
</InputLabel>
</Grid>

<Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft:4}}>
  Mobile No. <TextField id=" mobileNo" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter Mobile No. " sx={{ marginLeft: 2 }} />
</InputLabel>

        </Grid>

        <Grid item xs={12} md={12} sm={12} lg={6}>
<InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 2}}>
  Alternate No. <TextField id=" alternateNo" type ="number " size="small" autoComplete="off" variant="outlined" placeholder="Enter Alternate No. " sx={{ marginLeft: 2 }} />
</InputLabel>
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
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 7}}>
  Ref. By 
  <TextField id=" refBy" name=" refBy" size="small" autoComplete="off" variant="outlined" placeholder="Enter " sx={{ marginLeft: 2, width: '300px' }} />
  
</InputLabel>
</Grid>
     </Grid>
    </Paper> 



    <Paper
            elevation={3}
            sx={{ paddingBottom: 3,mt:4, backgroundColor: "#fbfbfb" }}
          >
            <Grid container spacing={2}>

            <Grid item xs={12} md={6} sm={6} lg={8}>
              <Grid container>
              <Grid item xs={12} md={12} sm={12} lg={4}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 3,
                  }}
                >
                  Billing Item Name
                  </InputLabel>
                  </Grid>
                  <Grid item xs={12} md={12} sm={12} lg={3}>
                  <TextField
                  
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    sx={{ marginLeft: 4, width: "150px" }}
                  />

                  </Grid>
                  <Grid item xs={12} md={12} sm={12} lg={3}>
                  <TextField
                  
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                  sx={{ marginLeft: 4, width: "150px" }}
                />
</Grid>

<Grid item xs={12} md={12} sm={12} lg={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 2,
                  }}
                >
                 Account
                  </InputLabel>

</Grid>
<Grid item xs={12} md={12} sm={12} lg={6}>
                  <TextField
                  
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                  sx={{ marginLeft: 2,mt:2, width: "600px" }}
                />
</Grid>



               </Grid>
              </Grid>
              <Grid item xs={12} md={12} sm={12} lg={4}>
                <Grid container>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                <Button>
                  <AddBoxIcon />ADD
                </Button>
                </Grid>
                <Grid item xs={12} md={12} sm={12} lg={12} sx={{mt:2}}>        
                 <Button>
                  <DeleteIcon/>DEL
                </Button>
                </Grid>    
                </Grid>
              </Grid>

              <Grid item xs={12} md={12} sm={12} lg={12}>


              <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Billing Item Name</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Amonut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow
                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              
              </TableCell>
              <TableCell align="right">xyz</TableCell>
              <TableCell align="right">xyz</TableCell>
              <TableCell align="right">xzt</TableCell>
              <TableCell align="right">xyz</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
              </Grid>
</Grid>
</Paper>


<Grid container sx={{mt:2}}>





<Grid item xs={12} md={12} sm={12} lg={8}>
<Grid container   sx={{mt:2,}}>
<Grid item xs={12} md={12} sm={12} lg={12}>
          <InputLabel 
  sx={{ display: "flex", alignItems: "center", fontWeight: 700, paddingLeft: 4}}>
        Remarks
          <TextField id=" remarks" name=" remarks"  size="small" autoComplete="off" variant="outlined" placeholder="Enter Remarks" sx={{ marginLeft: 2 , width: '400px'}} />
</InputLabel>
   </Grid>


   <Grid item xs={12} md={12} sm={3} lg={3}   sx={{ml:2,mt:2}}>
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700,  paddingLeft: 6 }}>
    Cash
    <TextField id=" cash" name=" cash" size="small" autoComplete="off" variant="outlined"  sx={{ marginLeft: 2 }}  />
</InputLabel></Grid>
<Grid item xs={12} md={12} sm={3} lg={3}   sx={{ml:2,mt:2}}>
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700 , paddingLeft: 6  }}>
  Card
  <TextField id=" card" name=" card" size="small" autoComplete="off" variant="outlined"  sx={{ marginLeft: 2 }}  />
</InputLabel></Grid>
<Grid item xs={12} md={12} sm={3} lg={4}  sx={{ml:2,mt:2}} >
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700,  paddingLeft: 4 }}>
   Balance
  <TextField id=" balance" name=" balance" size="small" autoComplete="off" variant="outlined" sx={{ marginLeft: 1, }}    /> 
   </InputLabel></Grid>

  <Grid item xs={12} md={12} sm={3} lg={3}   sx={{ml:2,mt:2}}>
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700,  paddingLeft: 6 }}>
    Bank
    <TextField id=" bank" name=" bank" size="small" autoComplete="off" variant="outlined"  sx={{ marginLeft: 2 }}  />
</InputLabel></Grid>
<Grid item xs={12} md={12} sm={3} lg={3}   sx={{ml:2,mt:2}}>
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700 , paddingLeft: 7  }}>
  TPA
  <TextField id=" tpa" name=" tpa" size="small" autoComplete="off" variant="outlined"  sx={{ marginLeft: 2 }}  />
</InputLabel></Grid>
<Grid item xs={12} md={12} sm={3} lg={4}  sx={{ml:1,mt:2}} >
<InputLabel 
sx={{ display: "flex", alignItems: "center", fontWeight: 700,   }}>
   Adj. In Ledger
  <TextField id=" adjinLedger" name=" adjinLedger" size="small" autoComplete="off" variant="outlined" sx={{ marginLeft: 1, }}    /> 
   </InputLabel></Grid>

   </Grid>
   </Grid>

<Grid item xs={12} md={12} sm={12} lg={4}>
  <Grid  container>
  <Grid item xs={12} md={12} sm={12} lg={12} sx={{mt:2}}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 7,
                  }}
                >
                  Total
                  <TextField
                    id=" total"
                    name=" total"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder=""
                    sx={{ marginLeft: 2, width: "200px" }}
                  />
                </InputLabel>
                </Grid>
                <Grid item xs={12} md={12} sm={12} lg={12} sx={{mt:2}}>
           
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 7,
                  }}
                >
                  Disc.
                  <TextField
                    id=" disc"
                    name=" disc"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder=""
                    sx={{ marginLeft: 2, width: "200px" }}
                  />
                </InputLabel>

                </Grid>
                <Grid item xs={12} md={12} sm={12} lg={12} sx={{mt:2,}}>
              <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                   
                  }}
                >
                  Total Amonut
                  <TextField
                    id=" totaLAmount"
                    name=" totalAmount"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder=""
                    sx={{ marginLeft: 2, width: "200px" }}
                  />
                </InputLabel>

                </Grid>
                </Grid>
              </Grid>
 
              <Grid container>
                <Grid  item
              xs={12}
              md={12}
              sm={12}
              lg={4}
              sx={{ marginBottom: 2, mt: 2 }}  >
                <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "20px" }}
              >
                Print
              </Button>
                </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sm={12}
              lg={8}
              sx={{ marginBottom: 2, mt: 2 }}
            >
           

              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "20px" }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginRight: "20px" }}
              >
                Clear
              </Button>

              <Button variant="outlined" style={{ marginLeft: "20px" }}>
                Exit
              </Button>
              
             
    
            </Grid>
</Grid>

</Grid>
    </Box>
    </Box>
    </>
  )
}
