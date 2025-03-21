import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import SideDrawer from './layout/SideDrawer';
import  Home  from './pages/Home';
import { ToastContainer } from 'react-toastify';
import SignUp from './pages/SignUp';

const App=()=>{
  return(
   <Router>
    <SideDrawer/>
    <Routes>
      <Route path="/"element={<Home/>} />
      <Route path="/sign-up"element={<SignUp/>} />
    </Routes>
    <ToastContainer position="top-right"/>
   </Router>
  )
}

export default App;