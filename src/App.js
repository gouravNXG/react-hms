import logo from './logo.svg';
import './App.css';
import LeftNavBar from './Components/LeftNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Patient_Registration from './Screens/Patient_Registration';
import OPD_Patients from './Screens/OPD_Patients';
import OPD_Billing from './Screens/OPD_Billing';
import Patient_Admission_Regular from './Screens/Patient_Admission_Regular';
function App() {
  return (
    <>
    <div className="App">

    <BrowserRouter>
    <LeftNavBar />
          <Routes>
         
          <Route path="/patient-admission-regular"  element={< Patient_Admission_Regular />} />
            <Route path="/patient-registration"  element={<Patient_Registration />} />
            <Route path="/opd-patients-consultancy" element={<OPD_Patients />} />
            <Route path="/opd-billing"  element={<OPD_Billing />} />

          </Routes>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
