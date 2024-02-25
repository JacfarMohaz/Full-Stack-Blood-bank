import SideNav from "./SideNav"
import SystemHeader from "./SystemHeader"

function BloodType() {
    return <div>
        <SideNav />
        <SystemHeader />

        <div className="grid grid-cols-4 ml-[23%]">
            <div className="bg-primeryColor w-28 h-28 mt-10 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">A+</h1>
            </div>

            {/* two */}
            <div className="bg-primeryColor w-28 h-28 mt-10 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">A-</h1>
            </div>

            {/* three */}
            <div className="bg-primeryColor w-28 h-28 mt-10 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">B+</h1>
            </div>

            {/* four */}
            <div className="bg-primeryColor w-28 h-28 mt-10 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">B-</h1>
            </div>

            {/* five */}
            <div className="bg-primeryColor w-28 h-28 mt-20 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">AB+</h1>
            </div>

            {/* six */}
            <div className="bg-primeryColor w-28 h-28 mt-20 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">AB-</h1>
            </div>

            {/* seven */}
            <div className="bg-primeryColor w-28 h-28 mt-20 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">O+</h1>
            </div>

            {/* eight */}
            <div className="bg-primeryColor w-28 h-28 mt-20 rounded-2xl shadow-2xl text-textColor">
                <i class="fa-solid text-3xl pt-5 pl-10 fa-droplet"></i>
                <h1 className="text-4xl font-semibold pl-8">O-</h1>
            </div>

        </div>

    </div>
}

export default BloodType