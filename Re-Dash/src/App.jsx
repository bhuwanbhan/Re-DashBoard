import './App.css'

import Reset from './Components/Auth/Reset'
import { Crm } from './Components/Crm/Crm'
import Dash from './Components/DashBoard/Dash'


import { Table } from './Components/Table/Table'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Components/Auth/Login'
import Forget from './Components/Auth/Forget'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import OTP from './Components/Auth/OTP'


function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/OTP" element={<OTP/>} />
            <Route path="/Forget" element={<Forget/>} />
          <Route path="/" element={<Dash />} />
            <Route path="/table" element={<Table />} />
            <Route path="/contact" element={<Crm />} />
          
        </Routes>
      </BrowserRouter> 


  </>
   
  )
}

export default App;