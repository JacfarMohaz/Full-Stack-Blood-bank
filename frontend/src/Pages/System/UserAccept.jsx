import { useEffect, useState } from "react"
import SideNav from "../../Components/System/SideNav"
import SystemHeader from "../../Components/System/SystemHeader"
import axios from "axios"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserAccept() {

    const [isApproved, setIsApproved] = useState([])

    const params = useParams()

    const handleApprovedUsers = () => {
        axios.get("http://localhost:7000/approved/users").then((res) => {
            setIsApproved(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleApprovedUsers()
    }, [])

    const handleUpdateApproved = () => {
        axios.put(`http://localhost:7000/updateapproved/users/${params.id}`).then((res) => {
            toast(`User Registered`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
            })
            handleApprovedUsers()
        }).catch((error) => console.log(error))
    }

    return <div>
        <SideNav />
        <SystemHeader />

        <div className="bg-fourthColor pb-4 mb-3 w-[75%] h-[70%] ml-[22%] mt-10 rounded-2xl shadow-2xl">
            <div className="flex justify-between px-2 pb-3">
                <h1 className="text-3xl text-textColor font-semibold pt-4">Users Approved</h1>
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
                    isApproved.length > 0 ? isApproved.map((data) => {
                        return <tbody className="border-b border-thirdColor">
                            <tr className="text-textColor text-center">
                                <td className="py-4">{data.userName}</td>
                                <td className="py-4">{data.email}</td>
                                <td className="py-4">{data.role}</td>
                                <td className="py-4">{new Date(data.createdAt).toDateString()}</td>
                                <td className="py-4">
                                    <i class="fa-solid cursor-pointer text-2xl text-primeryColor fa-xmark"></i>
                                    <i onClick={() => handleUpdateApproved(data._id)} class="fa-solid cursor-pointer text-2xl pl-5 text-green-500 fa-check"></i>
                                </td>
                            </tr>
                        </tbody>
                    })
                        :
                        <p className="text-textColor">There is no data yet</p>
                }
            </table>
        </div>
        
        <ToastContainer />

    </div>

}

export default UserAccept