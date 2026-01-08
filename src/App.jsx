import { useState } from 'react'
import './App.css'
import AdminLayout from './components/layout/AdminLayout'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Users from './pages/Users';
import Offices from './pages/Offices';


function App() {

  return (
    <>
      <BrowserRouter>
        <AdminLayout>

          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/offices" element={<Offices />} />


          </Routes>

        </AdminLayout>
      </BrowserRouter>


    </>
  )
}

export default App
