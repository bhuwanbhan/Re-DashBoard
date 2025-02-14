
import './App.css'
import Dash from './Components/DashBoard/Dash'
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar'
import Reset from './Components/Reset/Reset';
import Sidebar from './Components/Sidebar/Sidebar'
import {  Routes, Route } from "react-router-dom";

function App() {
  

  return (
     <>
    {/* //    <Routes>
    //      <Route path="/" element={<Dash />}> */}
          {/* <Route path = "/navbar" element={<Navbar />} />
          <Route path="/sidebar" element={<Sidebar />} /> */}
{/*          
          <Route path = "/Login" element={<Login />} />
          <Route path="/Reset" element={<Reset />} /> */}

        
          
      {/* //   </Route> */}
      {/* //  </Routes>  */}

      {/* <Login/> */}

      <Reset/>
    
      
    </>
  )
}

export default App
