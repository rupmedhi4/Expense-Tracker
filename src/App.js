import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import SignUp from './Components/SignUp_Page/SignUp'
import LogInForm from './Components/LoggedIn_Page/LogInForm'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import DeshBoard from './Components/Deshboad/DeshBoard';
import PvtRoutes from './Components/PrivateRoutes/PvtRoutes';





export default function App() {
  return (
    <>
    <NavBar/>
    
      <Routes>
      <Route path="/" element={<Home/>} />
       <Route path='/deshboard' element={
        <PvtRoutes>
          <DeshBoard/>
        </PvtRoutes>
       }/>
        <Route path="/login" element={<LogInForm/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/deshboard" element={<DeshBoard/>} />
   
        
      </Routes>
      
    </>
  )
}
