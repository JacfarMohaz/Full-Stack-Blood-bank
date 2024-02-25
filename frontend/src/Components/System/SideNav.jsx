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


            <div> <i class="fa-solid fa-hospital"></i> Hospitals
                <i onClick={handleIsOpen} style={{ display: isOpen === true ? "none" : "" }} class="fa-solid text-sm pl-7 absolute top-[25em] pt-4 fa-chevron-down"></i>
                <i onClick={handleIsClose} style={{ display: isOpen === true ? "block" : "" }} class="fa-solid text-sm pl-40 hidden absolute top-[25em] pt-4 fa-chevron-up"></i>
                <div style={{display: isOpen === true ? "block" : ""}} className="text-sm pl-5 pt-4 hidden">
                    <div><i class="fa-regular fa-circle"></i> requesting hospital</div>
                    <div className="pt-2"><i class="fa-regular fa-circle"></i> List of hospital</div>
                </div>
            </div>

        </div>
        <div className="absolute bottom-0">
            <hr className="border-b w-56 border-primeryColor mt-[5em]" />
            <img className="w-20 ml-16" src={logIcon} />
        </div>



    </div >
}

export default SideNav