import { useEffect, useState } from "react"
import SideNav from "../../Components/System/SideNav"
import SystemHeader from "../../Components/System/SystemHeader"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UpdateUsers() {

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [role, setRole] = useState()

    const params = useParams()

    const navigate = useNavigate()

    const handleReadSingleUser = () => {
        axios.get(`http://localhost:7000/readsingle/users/${params.id}`).then((res) => {
            setUserName(res.data[0].userName)
            setEmail(res.data[0].email)
            setRole(res.data[0].role)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleReadSingleUser()
    }, [])

    const handleUpdateUser = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:7000/update/users/${params.id}`, {
            "userName": userName,
            "email": email,
            "role": role
        }).then((res) => {
            toast(`User Updated`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                onClose: () => navigate("/users")
            })
        }).catch((error) => console.log(error))
    }

    return <div>
        <SideNav />
        <SystemHeader />
        <div className="bg-fourthColor pb-4 mb-3 w-[45%] h-[70%] ml-[22%] mt-10 rounded-2xl shadow-2xl">
            <h1 className="text-3xl text-textColor font-semibold pt-4">Update Users</h1>
            <form className="pt-8 pl-20">
                <label className="text-2xl text-textColor">User Name</label> <br />
                <input value={userName} onChange={(e) => setUserName(e.target.value)} className="w-60 h-10 rounded-xl outline-none p-2 mt-2 mb-6 bg-gray-300" type="text" readOnly placeholder="Enter Your User Name" /> <br />
                <label className="text-2xl text-textColor">Email</label> <br />
                <input value={email} onChange={(e) => setEmail(e.target.value)}  className="w-60 h-10 rounded-xl outline-none p-2 mt-2 mb-6 bg-gray-300" type="text" readOnly placeholder="Enter Your Email" /> <br />
                <label className="text-2xl text-textColor">Role</label> <br />
                <select value={role} onChange={(e) => setRole(e.target.value)}  className="w-60 h-10 rounded-xl outline-none p-2 mt-2 mb-6 bg-gray-300">
                    <option value="">Select one</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select> <br />
                <button onClick={handleUpdateUser} className="bg-primeryColor px-8 py-2 rounded-xl text-textColor text-2xl ml-8">Update</button>
            </form>
        </div>

        <ToastContainer />

    </div>
}

export default UpdateUsers