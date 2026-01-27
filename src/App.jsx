import { useState } from 'react'
import './App.css'
import AdminLayout from './components/layout/AdminLayout'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Users from './pages/Users';
import Offices from './pages/Offices';
import BudgetHead from './pages/BudgetHead';
import BudgetAllocation from './pages/BudgetAllocation';
import BudgetExpenditure from './pages/BudgetExpenditure';
import AddBudgetExpenditure from './pages/AddBudgetExpenditure';
import BudgetExpenditureCash from './pages/BudgetExpenditureCash';

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
            <Route path="/head-master" element={<BudgetHead />} />
            <Route path="/allocation" element={<BudgetAllocation />} />
            <Route path="/expenditure" element={<BudgetExpenditure />} />
            <Route path="/add-budget-expenditure" element={<AddBudgetExpenditure />} />

            <Route path="/budget-expenditure-cash" element={<BudgetExpenditureCash />} />

          </Routes>

        </AdminLayout>
      </BrowserRouter>


    </>
  )
}

export default App
