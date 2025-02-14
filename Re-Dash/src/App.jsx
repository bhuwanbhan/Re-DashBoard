
import './App.css'
import Login from './Components/Auth/Login'
import Reset from './Components/Auth/Reset'
import Dash from './Components/DashBoard/Dash'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from "./Components/Sidebar/Sidebar"

function App() {
  

  return (

    <>
  <Navbar/>
  <Sidebar/>
  <Dash/>
  <Login/> 
  <Reset/>

  </>
    


  )
}

export default App
