import './App.css'
import Login from './Components/Auth/Login'
import Reset from './Components/Auth/Reset'
import { Crm } from './Components/Crm/Crm'
import Dash from './Components/DashBoard/Dash'

import { Table } from './Components/Table/Table'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectRoute from './Components/Auth/ProtectRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<Reset />} />
          <Route element={<ProtectRoute />}>
            <Route path="/" element={<Dash />} />
            <Route path="/table" element={<Table />} />
            <Route path="/contact" element={<Crm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;