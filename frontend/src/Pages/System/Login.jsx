import LogoPNG from "../../assets/logo jpg.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassowrd] = useState("")

    const navigate = useNavigate()

    const handleLoginUser = (e) => {
        e.preventDefault()
        axios.post("http://localhost:7000/login/user", {
            "email": email,
            "password": password
        }).then((res) => {
            if(res.data.error){
                toast(`Incorrect email or password`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                })
            }
            else if(res.data.isApproved === false){
                toast(`this user is not Accepted`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                })
            }
            else{
                toast(`suucessfully login`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    onClose: () => navigate("/dashboard")
                })
                localStorage.setItem("user", JSON.stringify(res.data))
            }
        }).catch((error) => console.log(error))
    }

    return <div className="bg-primeryColor w-full h-screen flex justify-around">
        <div className="pt-28">
            <img className="w-60 rounded-full" src={LogoPNG} />
        </div>
        <div className="pt-20 bg-seconderyColor px-20 shadow-2xl shadow-black">
            <h1 className="text-4xl text-textColor font-semibold text-center">Login</h1>

            <form className="pt-10">
                <label className="text-2xl text-textColor">Email</label> <br />
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-60 h-10 rounded-xl outline-none p-2 mt-2 mb-6 bg-gray-300" type="text" placeholder="Enter Your Email" /> <br />
                <label className="text-2xl text-textColor">Password</label> <br />
                <input value={password} onChange={(e) => setPassowrd(e.target.value)} className="w-60 h-10 rounded-xl outline-none p-2 mt-2 mb-8 bg-gray-300" type="password" placeholder="Enter Your Password" /> <br />
                <button onClick={handleLoginUser} className="bg-primeryColor px-8 py-2 rounded-xl text-textColor text-2xl ml-14">Login</button>
            </form>
            <p className="text-textColor pt-2">Don't have an account yet? <Link to="/register" className="text-primeryColor text-xl">Register</Link></p>

        </div>

        <ToastContainer />

    </div>
}

export default Login