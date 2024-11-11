import React from "react"
import AllRoutes from './routes/allRoutes.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
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
      </BrowserRouter> */}
        <BrowserRouter>
          <Routes>
              <Route path="/*" element={<AllRoutes />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;