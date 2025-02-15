
import './App.css'
import Login from './Components/Auth/Login'
import Reset from './Components/Auth/Reset'
import { Crm } from './Components/Crm/Crm'
import Dash from './Components/DashBoard/Dash'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
//import Sidebar from "./Components/Sidebar/Sidebar"
import { BrowserRouter, Routes, Route, useNavigate,Link } from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
 

  return(
    <>
    <Navbar/>
    <Sidebar/>
 
    <BrowserRouter>
     
        

         <Routes>
 
          <Route path="/dash" element={<Dash/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Reset" element={<Reset/>}/>
          <Route path="/crm" element={<Crm/>}/>
          
          
          
        </Routes>
      </BrowserRouter>

  </> 
    


  )
}

export default App
