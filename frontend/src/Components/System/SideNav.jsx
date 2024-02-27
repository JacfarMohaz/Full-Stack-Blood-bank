import { NavLink } from "react-router-dom"
import somLogoPNG from "../../assets/som blood bank logo.png"
import logIcon from "../../assets/logoIcon.png"
import { useState } from "react"


function SideNav() {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleIsClose = () => {
        setIsOpen(false)
    }


    return <div className="w-[18%] h-screen fixed border-r-2 border-gray-100 shadow-lg">
        <img className="w-20 ml-14" src={somLogoPNG} />

        <div className="text-2xl flex flex-col space-y-10 pl-10 pt-16 text-primeryColor">

            <NavLink to="/dashboard"> <i class="fa-brands fa-microsoft"></i> Dashboard</NavLink>


            <NavLink to="/donors"> <i class="fa-solid fa-hand-holding-droplet"></i> Donors</NavLink>


            <NavLink to="/bloodtype"> <i class="fa-solid fa-droplet"></i> Blood Type</NavLink>


            <NavLink to="/users"> <i class="fa-solid fa-users"></i> Users</NavLink>
            

        </div>
        <div className="absolute bottom-0">
            <hr className="border-b w-56 border-primeryColor mt-[5em]" />
            <img className="w-20 ml-16" src={logIcon} />
        </div>



    </div >
}

export default SideNav