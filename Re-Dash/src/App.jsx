
import './App.css'
import Login from './Components/Auth/Login'
import Reset from './Components/Auth/Reset'
import { Crm } from './Components/Crm/Crm'
import Dash from './Components/DashBoard/Dash'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from "./Components/Sidebar/Sidebar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 

  return(
    <>

<Navbar />
    <Sidebar />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>

  </> 
    


  )
}

export default App;
