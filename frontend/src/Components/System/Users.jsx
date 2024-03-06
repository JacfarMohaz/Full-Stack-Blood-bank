import { useEffect, useState } from "react"
import SideNav from "./SideNav"
import SystemHeader from "./SystemHeader"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserData from "./UserData";

function Users() {

    const [usersData, setUsersData] = useState([])

    const handleReadUsers = () => {
        axios.get("http://localhost:7000/read/users").then((res) => {
            setUsersData(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleReadUsers()
    }, [])

    const handleSearchUser = (id) => {
        const key = id.target.value
        if (key) {
            axios.get(`http://localhost:7000/search/users/${key}`).then((res) => {
                setUsersData(res.data)
            }).catch((error) => console.log(error))
        }
        else {
            handleReadUsers()
        }
    }

    const handleDeleteUser = (id) => {
        axios.delete(`http://localhost:7000/delete/users/${id}`).then((res) => {
            toast("User Deleted successfully", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false
            })
            handleReadUsers()
        }).catch((error) => console.log(error))
    }

    return <div>
        <SideNav />
        <SystemHeader />
        <div className="bg-fourthColor pb-4 mb-3 w-[75%] h-[70%] ml-[22%] mt-10 rounded-2xl shadow-2xl">
            <div className="flex justify-between px-2 pb-3">
                <h1 className="text-3xl text-textColor font-semibold pt-4">List of Users</h1>
                <input onChange={handleSearchUser} type="text" className="outline-none mt-5 w-40 h-7 border-2 border-fourthColor rounded-lg p-2" placeholder="Search ..." />
            </div>
            <hr className="border-b border-thirdColor" />
            <table className="table-auto w-full mt-4">
                <thead className="border-b border-thirdColor">
                    <tr className="text-textColor text-center  font-medium">
                        <th className="py-2">User Name</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">Role</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Action</th>
                    </tr>
                </thead>

                {
                    usersData.length > 0 ? usersData.map((data) => {
                        return <UserData UpdateID={data._id} deleteUser={() => handleDeleteUser(data._id)} userName={data.userName} email={data.email} role={data.role} date={new Date(data.createdAt).toDateString()} />
                    })
                        :
                        <p className="text-textColor">There is no data yet</p>
                }
            </table>
        </div>

        <ToastContainer />

    </div>
}

export default Users