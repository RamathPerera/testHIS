import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import HospitalPage from '../pages/HospitalPage';
import DoctorPage from '../pages/DoctorPage';
import NursePage from '../pages/NursePage';
import AppointmentPage from '../pages/AppointmentPage';
import PatientPage from '../pages/PatientPage';
import CalendarPage from '../pages/CalendarPage';
import RegistrationPage from '../pages/RegistrationPage';
import HomePage from '../pages/HomePage';
import CrudPage from '../pages/CrudPage';

function AllRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        const handleStorageChange = () => {
            setIsAuthenticated(!!localStorage.getItem('token'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    
  return (
    <Routes>
      <Route
        path="/"
        element={!(isAuthenticated) ? <HomePage /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/login"
        element={!(isAuthenticated) ? <LoginPage /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/register"
        element={!(isAuthenticated) ? <RegistrationPage /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/hospital"
        element={isAuthenticated ? <HospitalPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/doctors"
        element={isAuthenticated ? <DoctorPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/nurses"
        element={isAuthenticated ? <NursePage /> : <Navigate to="/login" />}
      />
      <Route
        path="/patients"
        element={isAuthenticated ? <PatientPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/appointments"
        element={isAuthenticated ? <AppointmentPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/calendar"
        element={isAuthenticated ? <CalendarPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/crud"
        element={isAuthenticated ? <CrudPage /> : <Navigate to="/login" />}
      />
      </Routes>
  );
}

export default AllRoutes;
