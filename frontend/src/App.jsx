import {Routes, Route } from "react-router-dom"
import Website from "./Pages/Website/Webiste"
import DonateBlood from "./Pages/Website/DonateBlood"
import Dashboard from "./Pages/System/Dashboard"
import Donors from "./Components/System/Donors"
import BloodType from "./Components/System/BloodType"

function App() {
  return <Routes>
    <Route path="/" element={<Website />} />
    <Route path="/donateblood" element={<DonateBlood />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/donors" element={<Donors />} />
    <Route path="/bloodtype" element={<BloodType />} />
  </Routes>
}

export default App
