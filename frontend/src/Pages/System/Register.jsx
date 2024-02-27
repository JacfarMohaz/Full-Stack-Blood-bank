import { useState } from "react";
import LogoPNG from "../../assets/logo jpg.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassowrd] = useState("")

    const navigate = useNavigate()

    const handleRegisterUser = (e) => {
        e.preventDefault()
        axios.post("http://localhost:7000/register/user", {
            "userName": userName,
            "email": email,
            "password": password
        }).then((res) => {
            toast(`User Registered`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                onClose: () => navigate("/login")
            })
        }).catch((error) => console.log(error))
    }

    return <div className="bg-primeryColor w-full h-screen flex justify-around">
    <div className="pt-28">
        <img className="w-60 rounded-full" src={LogoPNG} />
    </div>
    <div className="pt-16 bg-seconderyColor px-20 shadow-2xl shadow-black">
        <h1 className="text-4xl text-textColor font-semibold text-center">Register</h1>

        <form className="pt-10">
            <label className="text-2xl text-textColor">User Name</label> <br />
            <input value={userName} onChange={(e) => setUserName(e.target.value)} className="w-60 h-10 rounded-xl outline-none p-2 mt-2 mb-6 bg-gray-300" type="text" placeholder="Enter Your User Name" /> <br />
            <label className="text-2xl text-textColor">Email</label> <br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-60 h-10 rounded-xl outline-none p-2 mt-2 mb-6 bg-gray-300" type="text" placeholder="Enter Your Email" /> <br />
            <label className="text-2xl text-textColor">Password</label> <br />
            <input value={password} onChange={(e) => setPassowrd(e.target.value)} className="w-60 h-10 rounded-xl outline-none p-2 mt-2 mb-8 bg-gray-300" type="password" placeholder="Enter Your Password" /> <br />
            <button onClick={handleRegisterUser} className="bg-primeryColor px-8 py-2 rounded-xl text-textColor text-2xl ml-14">Register</button>
        </form>
        <p className="text-textColor pt-2">Already have an account? <Link to="/login" className="text-primeryColor text-xl">Login</Link></p>

    </div>

    <ToastContainer />

</div>
}

export default Register