import { Link } from "react-router-dom"
import SideNav from "./SideNav"
import SystemHeader from "./SystemHeader"

function BloodType() {
    return <div>
        <SideNav />
        <SystemHeader />

        <div className="grid grid-cols-4 ml-[23%]">
            <Link to="/aplas" className="bg-primeryColor hover:bg-seconderyColor w-28 h-28 mt-10 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">A+</h1>
            </Link>

            {/* two */}
            <Link to="/aminus" className="bg-primeryColor hover:bg-seconderyColor w-28 h-28 mt-10 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">A-</h1>
            </Link>

            {/* three */}
            <Link to="/bplas" className="bg-primeryColor hover:bg-seconderyColor w-28 h-28 mt-10 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">B+</h1>
            </Link>

            {/* four */}
            <Link to="/bminus" className="bg-primeryColor hover:bg-seconderyColor w-28 h-28 mt-10 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">B-</h1>
            </Link>

            {/* five */}
            <Link to="/abplas" className="bg-primeryColor hover:bg-seconderyColor w-28 h-28 mt-20 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">AB+</h1>
            </Link>

            {/* six */}
            <Link to="/abminus" className="bg-primeryColor hover:bg-seconderyColor w-28 h-28 mt-20 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">AB-</h1>
            </Link>

            {/* seven */}
            <Link to="/oplas" className="bg-primeryColor hover:bg-seconderyColor w-28 h-28 mt-20 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">O+</h1>
            </Link>

            {/* eight */}
            <Link to="/ominus" className="bg-primeryColor hover:bg-seconderyColor w-28 h-28 mt-20 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">O-</h1>
            </Link>

        </div>

    </div>
}

export default BloodType