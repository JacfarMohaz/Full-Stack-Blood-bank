import { Routes, Route, useNavigate } from "react-router-dom"
import Website from "./Pages/Website/Webiste"
import DonateBlood from "./Pages/Website/DonateBlood"
import Dashboard from "./Pages/System/Dashboard"
import Donors from "./Components/System/Donors"
import BloodType from "./Components/System/BloodType"
import APlas from "./Components/System/blood type/APlas"
import AMinus from "./Components/System/blood type/AMinus"
import BPlas from "./Components/System/blood type/BPlas"
import BMinus from "./Components/System/blood type/BMinus"
import ABPlas from "./Components/System/blood type/ABPlas"
import ABMinus from "./Components/System/blood type/ABMinus"
import OPlas from "./Components/System/blood type/OPlas"
import OMinus from "./Components/System/blood type/OMinus"
import Login from "./Pages/System/Login"
import Register from "./Pages/System/Register"
import Users from "./Components/System/Users"
import UpdateUsers from "./Pages/System/UpdateUsers"
import { useEffect } from "react"
import UserAccept from "./Pages/System/UserAccept"
import UserProfile from "./Pages/System/UserProfile"
import BlogPage from "./Pages/Website/BlogPage"
import About from "./Pages/Website/About"

function App() {

  

  return <Routes>

    {/* Website routes */}
    <Route path="/" element={<Website />} />
    <Route path="/about" element={<About />} />
    <Route path="/donateblood" element={<DonateBlood />} />
    <Route path="/blog" element={<BlogPage />} />

    {/* System Routes */}
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/donors" element={<Donors />} />
    <Route path="/bloodtype" element={<BloodType />} />
    <Route path="/aplas" element={<APlas />} />
    <Route path="/aminus" element={<AMinus />} />
    <Route path="/bplas" element={<BPlas />} />
    <Route path="/bminus" element={<BMinus />} />
    <Route path="/abplas" element={<ABPlas />} />
    <Route path="/abminus" element={<ABMinus />} />
    <Route path="/oplas" element={<OPlas />} />
    <Route path="/ominus" element={<OMinus />} />
    <Route path="/users" element={<Users />} />
    <Route path="/updateusers/:id" element={<UpdateUsers />} />
    <Route path="/useraccept" element={<UserAccept />} />
    <Route path="/userprofile/:id" element={<UserProfile />} />


    {/* Login & Registration Router */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />






  </Routes>


}

export default App
