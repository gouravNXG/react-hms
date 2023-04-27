import React from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Select,
  InputLabel,
  MenuItem,
  Card,
  CardMedia,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import LeftNavBar from "../Components/LeftNavBar";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
const drawerWidth = 240;
export default function Patient_Admission_Regular() {
  return (
    <>
      <Box sx={{ display: "flex", padding: 3 }}>
        <LeftNavBar />
        <Box
          component="main"
          sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}
        >
          <h1>Patient Admission Regular</h1>
          <Paper
            elevation={3}
            sx={{ paddingBottom: 3, backgroundColor: "#fbfbfb" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 8,
                  }}
                >
                  IPD No.{" "}
                  <TextField
                    id=" ipdNo"
                    type="number "
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder="Enter IPD No. "
                    sx={{ marginLeft: 2, width: "250px" }}
                  />
                </InputLabel>
              </Grid>
              <Grid item xs={12} md={12} sm={6} lg={3} sx={{ mt: 2 }}>
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
              <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }}>
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
                    sx={{ marginLeft: 2, mr: 2 }}
                  />{" "}
                </InputLabel>
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }}>
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

              <Grid item xs={12} md={6} sm={6} lg={10}>
                <Grid container>
                  <Grid item xs={12} md={12} sm={12} lg={6} sx={{ mt: 2 }}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        paddingLeft: 5,
                      }}
                    >
                      First Name
                      <TextField
                        id="firstName"
                        name="firstName"
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        placeholder="Enter First Name"
                        sx={{ marginLeft: 2, width: "300px" }}
                      />
                    </InputLabel>{" "}
                  </Grid>

                  <Grid item xs={12} md={12} sm={12} lg={6} sx={{ mt: 2 }}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        paddingLeft: 5,
                      }}
                    >
                      Last Name
                      <TextField
                        id="lastrName"
                        name="lastName"
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        placeholder="Enter Last Name"
                        sx={{ marginLeft: 2, width: "300px" }}
                      />
                    </InputLabel>{" "}
                  </Grid>

                  <Grid item xs={12} md={12} sm={12} lg={3} sx={{ mt: 2 }}>
                    <InputLabel
                      htmlFor="age-picker"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        fontWeight: 700,
                        paddingLeft: 7,
                        ml: 4,
                      }}
                    >
                      Age
                      <TextField
                        id="age-picker"
                        type="number"
                        size="small"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{ marginLeft: 2 }}
                      />{" "}
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} md={12} sm={12} lg={3} sx={{ mt: 2 }}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        paddingLeft: 7,
                        ml: 4,
                      }}
                    >
                      Sex
                      <Select
                        labelId="gender-label"
                        id="gender"
                        label="gender"
                        size="small"
                        sx={{ marginLeft: 2 }}
                      >
                        <MenuItem value="first">Male </MenuItem>
                        <MenuItem value="second">Female </MenuItem>
                      </Select>
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} md={12} sm={12} lg={6} sx={{ mt: 2 }}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        paddingLeft: 1,
                      }}
                    >
                      Relative Name
                      <TextField
                        id="relativeName"
                        name="relativeName"
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        placeholder="Enter  Name"
                        sx={{ marginLeft: 2, width: "300px" }}
                      />
                    </InputLabel>{" "}
                  </Grid>

                  <Grid item xs={12} md={12} sm={12} lg={6} sx={{ mt: 2 }}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        paddingLeft: 3,
                      }}
                    >
                      Father Name
                      <TextField
                        id="fatherName"
                        name="fatherName"
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        placeholder="Enter Father Name"
                        sx={{ marginLeft: 2, width: "300px" }}
                      />
                    </InputLabel>{" "}
                  </Grid>

                  <Grid item xs={12} md={12} sm={12} lg={6} sx={{ mt: 2 }}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        paddingLeft: 2,
                      }}
                    >
                      Mother Name
                      <TextField
                        id="motherName"
                        name="motherName"
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        placeholder="Enter Mother Name"
                        sx={{ marginLeft: 2, width: "300px" }}
                      />
                    </InputLabel>{" "}
                  </Grid>

                  <Grid item xs={12} md={12} sm={12} lg={6} sx={{ mt: 2 }}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        paddingLeft: 4,
                      }}
                    >
                      Occupation
                      <TextField
                        id="occupation"
                        name="occupation"
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        placeholder="Enter occupation"
                        sx={{ marginLeft: 2, width: "300px" }}
                      />
                    </InputLabel>{" "}
                  </Grid>

                  <Grid item xs={12} md={12} sm={12} lg={6} sx={{ mt: 2 }}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        paddingLeft: 5,
                      }}
                    >
                      Phone No.{" "}
                      <TextField
                        id=" phoneNo"
                        type="number "
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        placeholder="Enter Phone No. "
                        sx={{ marginLeft: 2 }}
                      />
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} md={12} sm={12} lg={6} sx={{ mt: 2 }}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        paddingLeft: 5,
                      }}
                    >
                      Mobile No.{" "}
                      <TextField
                        id=" mobileNo"
                        type="number "
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        placeholder="Enter Mobile No. "
                        sx={{ marginLeft: 2 }}
                      />
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} md={12} sm={12} lg={6} sx={{ mt: 2 }}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        paddingLeft: 7,
                      }}
                    >
                      Resi.No.{" "}
                      <TextField
                        id=" resiNo"
                        type="number "
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        placeholder="Enter "
                        sx={{ marginLeft: 2 }}
                      />
                    </InputLabel>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12} sm={12} lg={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={12} sm={12} lg={12} sx={{ ml: 2 }}>
                  <Card sx={{ maxWidth: 150 }}>
                    <CardMedia
                      component="img"
                      height="194"
                      image="/static/images/cards/paella.jpg"
                      alt="Image"
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={12} sm={12} lg={12} sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "20px" }}
                  >
                    Select
                  </Button>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12} sm={6} lg={3}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 10,
                  }}
                >
                  State
                  <Select
                    labelId="state-label"
                    id="state"
                    label="state"
                    size="small"
                    sx={{ marginLeft: 2 }}
                  >
                    <MenuItem value="first">cg </MenuItem>
                    <MenuItem value="second">mp </MenuItem>
                  </Select>
                </InputLabel>
              </Grid>
              <Grid item xs={12} md={12} sm={6} lg={3}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 7,
                    ml: 4,
                  }}
                >
                  City
                  <Select
                    labelId="city-label"
                    id="city"
                    label="city"
                    size="small"
                    sx={{ marginLeft: 2 }}
                  >
                    <MenuItem value="first">rpr </MenuItem>
                    <MenuItem value="second">durg </MenuItem>
                  </Select>
                </InputLabel>
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={6}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 7,
                  }}
                >
                  Pincode{" "}
                  <TextField
                    id=" pincode"
                    type="number "
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder="Enter  Pincode "
                    sx={{ marginLeft: 2 }}
                  />
                </InputLabel>
              </Grid>

              <Grid item xs={12} md={12} sm={12} lg={12}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 1,
                  }}
                >
                  Local Address
                  <TextField
                    id=" localaddress"
                    name=" localaddress"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    fullWidth
                    placeholder="Enter Local Address"
                    sx={{ marginLeft: 2, width: "400px" }}
                  />
                </InputLabel>
              </Grid>
              <Grid item xs={12} md={12} sm={12} lg={12}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 1,
                  }}
                >
                  Permanent Address
                  <TextField
                    id="permanentaddress"
                    name=" permanentaddress"
                    size="small"
                    autoComplete="off"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter Permanent  Address"
                    sx={{ marginLeft: 2, width: "400px" }}
                  />
                </InputLabel>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={3}
            sx={{ paddingBottom: 3,mt:4, backgroundColor: "#fbfbfb" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={6} lg={4}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 3,
                  }}
                >
                  Referring Dr.
                  <TextField
                    id=" ReferringDr"
                    name=" ReferringDr"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder="Enter "
                    sx={{ marginLeft: 2, width: "400px" }}
                  />
                </InputLabel>
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={2}>
                <button>
                  <AddBoxIcon />{" "}
                </button>
              </Grid>

              <Grid item xs={12} md={6} sm={6} lg={3}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 10,
                  }}
                >
                  Ward
                  <TextField
                    id=" ward"
                    name=" ward"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder="Enter Ward"
                    sx={{ marginLeft: 2, width: "400px" }}
                  />
                </InputLabel>
              </Grid>

              <Grid item xs={12} md={6} sm={6} lg={3}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 7,
                  }}
                >
                  Bed No.
                  <TextField
                    id=" bedNo"
                    name=" bedNo"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder="Enter Bed No."
                    sx={{ marginLeft: 2, width: "400px" }}
                  />
                </InputLabel>
              </Grid>

              <Grid item xs={12} md={6} sm={6} lg={6}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 1,
                  }}
                >
                  Consultant Dr.
                  <TextField
                    id=" consultantDr"
                    name=" consultantDr"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder="Enter Consultant Dr."
                    sx={{ marginLeft: 2, width: "400px" }}
                  />
                </InputLabel>
              </Grid>

              <Grid item xs={12} md={6} sm={6} lg={6}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 3,
                  }}
                >
                  Department
                  <TextField
                    id=" department"
                    name=" department"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder="Enter Department"
                    sx={{ marginLeft: 2, width: "400px" }}
                  />
                </InputLabel>
              </Grid>

              <Grid item xs={12} md={6} sm={6} lg={6}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 1,
                  }}
                >
                  2nd Consultant
                  <TextField
                    id=" 2ndconsultant"
                    name=" 2ndconsultant"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    placeholder="Enter 2nd Consultant"
                    sx={{ marginLeft: 1, width: "400px" }}
                  />
                </InputLabel>
              </Grid>

              <Grid item xs={12} md={6} sm={6} lg={6}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 5,
                  }}
                >
                  Diagnosis
                  <Select
                    labelId="diagonosis--label"
                    id="diagonosis"
                    label="diagonosis"
                    size="small"
                    sx={{ marginLeft: 2 }}
                  >
                    <MenuItem value="first">diagonosis 1 </MenuItem>
                    <MenuItem value="second">diagonosis 2 </MenuItem>
                  </Select>
                </InputLabel>
              </Grid>

              <Grid item xs={12} md={12} sm={6} lg={3}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 5,
                  }}
                >
                  Corporate
                  <Select
                    labelId="corporate-label"
                    id="covidpcorporateatient"
                    label="corporate"
                    size="small"
                    sx={{ marginLeft: 2 }}
                  >
                    <MenuItem value="first">YES </MenuItem>
                    <MenuItem value="second">NO </MenuItem>
                  </Select>
                </InputLabel>
              </Grid>

              <Grid item xs={12} md={12} sm={12} lg={6}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 3,
                  }}
                >
                  Insu. Comp.
                  <TextField
                    id=" localaddress"
                    name=" localaddress"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    fullWidth
                    placeholder="Enter Insurance Company"
                    sx={{ marginLeft: 2, width: "400px" }}
                  />
                </InputLabel>
              </Grid>
              <Grid item xs={12} md={12} sm={12} lg={6}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 6,
                  }}
                >
                  Insu. No.
                  <TextField
                    id="insuNo."
                    name=" insuNo"
                    size="small"
                    autoComplete="off"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter Insurance No."
                    sx={{ marginLeft: 2, width: "400px" }}
                  />
                </InputLabel>
              </Grid>
              <Grid item xs={12} md={6} sm={12} lg={6}>
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    paddingLeft: 4,
                  }}
                >
                  MLC Record <input type="checkbox" />
                </InputLabel>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sm={12}
                lg={12}
                sx={{ marginBottom: 2, mt: 2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "20px" }}
                >
                  Daily Services
                </Button>
              </Grid>
            </Grid>
          </Paper>

          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sm={12}
              lg={12}
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
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button variant="outlined" style={{ marginLeft: "20px" }}>
                Search
              </Button>
              <Button variant="outlined" style={{ marginLeft: "20px" }}>
                Exit
              </Button>
              <Button variant="outlined">Attachments</Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "20px" }}
              >
                Print
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "20px" }}
              >
                Print Stickers
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
