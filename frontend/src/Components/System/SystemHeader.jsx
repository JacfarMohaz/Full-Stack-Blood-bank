import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function SystemHeader() {

    const [isDown, setIsDown] = useState(false)


    const [isApproved, setIsApproved] = useState([])

    const getUsersUnApproved = () => {
        axios.get("http://localhost:7000/unapproved/users").then((res) => {
            setIsApproved(res.data.getIsApproved)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getUsersUnApproved()
    }, [])

    const userName = localStorage.getItem("user")

    const handlelogout = () => {
        localStorage.clear()
    }

    const handleIsDown = () => {
        setIsDown(true)
    }

    const handleIsUp = () => {
        setIsDown(false)
    }

    return <div className="ml-[18%] border border-gray-100 shadow-md p-4 ">
        <h1 className="text-xl font-semibold text-seconderyColor">So<span className="text-fourthColor">m</span> Blood Bank</h1>
        <Link to="/useraccept"><i class="fa-regular absolute text-2xl text-seconderyColor right-36  top-4 fa-bell">
            <div className="bg-primeryColor w-8 h-5 rounded-lg absolute -top-2 left-2"><p className="text-sm pl-2 text-textColor">{isApproved > 0 ? isApproved : 0}</p></div>
        </i></Link>

        <div onClick={handleIsDown} className="absolute top-4 right-12 flex border border-gray-100">
            <div className="bg-primeryColor w-8 h-8 rounded-full">
                <h1 className="text-2xl pl-2 cursor-pointer text-textColor">{userName && JSON.parse(userName).userName[0]}</h1>
            </div>
        </div>

        <div style={{ display: isDown === true ? "block" : "" }} className="bg-primeryColor w-32 h-32 hidden absolute right-16 rounded-lg top-16">
            <i onClick={handleIsUp} class="fa-solid text-xl text-textColor pl-[5.3em] fa-xmark"></i>
            <div className="flex-col space-y-5">
                <div>
                    <Link to={`/userprofile/${JSON.parse(userName)._id}`} className="text-textColor text-xl pb-4 pl-5"><i class="fa-regular fa-user"></i> Profile</Link>
                </div>
                <div>
                    <Link to="/login" onClick={handlelogout} className="text-textColor pt-5 text-xl pl-5"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</Link>
                </div>
            </div>
        </div>

    </div>
}

export default SystemHeader