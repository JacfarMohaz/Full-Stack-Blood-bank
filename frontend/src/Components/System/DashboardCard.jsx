import { useEffect, useState } from "react"
import axios from "axios"

function DashboardCards() {

    const [totlaDonors, setTotalDonors] = useState([])
    const [totalUsers, setTotalUsers] = useState([])

    const handleReadTotalDonors = () => {
        axios.get("http://localhost:7000/total/donors").then((res) => {
            setTotalDonors(res.data.getTotalDonors)
        }).catch((error) => console.log(error))
    }
    

    const handleReadTotalUsers = () => {
        axios.get("http://localhost:7000/total/users").then((res) => {
            setTotalUsers(res.data.getTotalUsers)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleReadTotalDonors()
        handleReadTotalUsers()
    }, [])

    return <div className="grid grid-cols-3 ml-[22%]">
        <div className="bg-seconderyColor w-60 h-36 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">Total Donors</h1>
            <p className="text-4xl font-bold pl-10 pt-6">{totlaDonors > 0 ? totlaDonors : 0} <i class="fa-solid pl-4 fa-hand-holding-droplet"></i></p>
        </div>

        {/* second */}
        <div className="bg-seconderyColor w-60 h-36 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">All Users</h1>
            <p className="text-4xl font-bold pl-10 pt-6">{totalUsers > 0 ? totalUsers : 0}<i class="fa-solid pl-10 fa-users"></i></p>
        </div>

        {/* third */}
        <div className="bg-seconderyColor w-60 h-36 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">All Messages</h1>
            <p className="text-4xl font-bold pl-10 pt-6">30 <i class="fa-solid pl-6 fa-envelope"></i></p>
        </div>

    </div>
}

export default DashboardCards