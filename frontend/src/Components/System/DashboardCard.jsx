function DashboardCards() {
    return <div className="grid grid-cols-3 ml-[22%]">
        <div className="bg-seconderyColor w-60 h-36 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">Total Donors</h1>
            <p className="text-4xl font-bold pl-6 pt-2">3.25 k <i class="fa-solid pl-4 fa-hand-holding-droplet"></i></p>
            <p className="text-sm pt-5 pl-3">50 joined us this week</p>
        </div>

        {/* second */}
        <div className="bg-seconderyColor w-60 h-36 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">All Users</h1>
            <p className="text-4xl font-bold pl-6 pt-2">12<i class="fa-solid pl-10 fa-users"></i></p>
            <p className="text-sm pt-5 pl-3">3 joined us this week</p>
        </div>

        {/* third */}
        <div className="bg-seconderyColor w-60 h-36 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">All Messages</h1>
            <p className="text-4xl font-bold pl-6 pt-2">30 <i class="fa-solid pl-6 fa-envelope"></i></p>
            <p className="text-sm pt-5 pl-3">10 Messages Send this week</p>
        </div>

    </div>
}

export default DashboardCards