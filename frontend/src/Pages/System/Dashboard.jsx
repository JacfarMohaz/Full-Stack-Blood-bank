import DashboardCards from "../../Components/System/DashboardCard"
import LatestMessages from "../../Components/System/LatestMessages"
import SideNav from "../../Components/System/SideNav"
import SystemHeader from "../../Components/System/SystemHeader"
import { useEffect,  } from "react"
import { useNavigate } from "react-router-dom"
function Dashboard() {

const isAuth = localStorage.getItem("user")

  const navigate = useNavigate()

  const handleRefresh = () => {
    if (!isAuth) {
      navigate("/login")
    }
  }

  useEffect(() => {
    handleRefresh()
  }, [])


    return <div>
        <SideNav />
        <SystemHeader />
        <DashboardCards />
        <LatestMessages />
    </div>
}

export default Dashboard