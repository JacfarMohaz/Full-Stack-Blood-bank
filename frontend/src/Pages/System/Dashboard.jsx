import DashboardCards from "../../Components/System/DashboardCard"
import LatestMessages from "../../Components/System/LatestMessages"
import SideNav from "../../Components/System/SideNav"
import SystemHeader from "../../Components/System/SystemHeader"

function Dashboard() {
    return <div>
        <SideNav />
        <SystemHeader />
        <DashboardCards />
        <LatestMessages />
    </div>
}

export default Dashboard