
import './App.css'

import Reset from './Components/Auth/Reset'
import { Crm } from './Components/Crm/Crm'
import Dash from './Components/DashBoard/Dash'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from "./Components/Sidebar/Sidebar"
import { Table } from './Components/Table/Table'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Auth/Login'
import Forget from './Components/Auth/Forget'

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Navbar/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/Dash" element={<Dash/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/table" element={<Table/>} />
        <Route path="/Reset" element={<Reset/>}/>
        <Route path="/Forget" element={<Forget/>}/>
        <Route path="/crm" element={<Crm />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;
