import {Routes, Route } from "react-router-dom"
import Website from "./Pages/Website/Webiste"
import DonateBlood from "./Pages/Website/DonateBlood"

function App() {
  return <Routes>
    <Route path="/" element={<Website />} />
    <Route path="/donateblood" element={<DonateBlood />} />
  </Routes>
}

export default App
