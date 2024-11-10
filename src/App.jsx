import React from "react"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage";
import HospitalPage from "./pages/HospitalPage";
import DoctorPage from "./pages/DoctorPage";
import NursePage from "./pages/NursePage";
import AppointmentPage from "./pages/AppointmentPage";
import PatientPage from "./pages/PatientPage";
import CalendarPage from "./pages/CalendarPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <Routes>
          <Route path="/hospital" element={<HospitalPage />} />
        </Routes>
        <Routes>
          <Route path="/doctors" element={<DoctorPage />} />
        </Routes>
        <Routes>
          <Route path="/nurses" element={<NursePage />} />
        </Routes>
        <Routes>
          <Route path="/patients" element={<PatientPage />} />
        </Routes>
        <Routes>
          <Route path="/appointments" element={<AppointmentPage />} />
        </Routes>
        <Routes>
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;