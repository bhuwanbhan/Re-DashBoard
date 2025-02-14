
import './App.css'
import Login from './Components/Auth/Login'
import Reset from './Components/Auth/Reset'
import Dash from './Components/DashBoard/Dash'
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar'
import Reset from './Components/Reset/Reset';
import Sidebar from './Components/Sidebar/Sidebar'
import {  Routes, Route } from "react-router-dom";

function App() {
  

  return (

    <>
  {/* <Navbar/>
  <Sidebar/>
  <Dash/> */}

   <Login/> 
  <Reset/>

  </>
    


  )
}

export default App
