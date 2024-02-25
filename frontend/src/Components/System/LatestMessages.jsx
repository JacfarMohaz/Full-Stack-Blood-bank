function LatestMessages() {
    const data = [
        {
            name: "Kalkaal",
            BloodType: "A+",
            NumberSends: "2000",
            Location: "Banaadir",
            Date: "2/25/2024"
        },
        {
            name: "Shaafi",
            BloodType: "A-",
            NumberSends: "1000",
            Location: "Banaadir",
            Date: "2/22/2024"
        },
        {
            name: "Digfeer",
            BloodType: "O-",
            NumberSends: "600",
            Location: "Banaadir",
            Date: "2/10/2024"
        },
        {
            name: "Xamar Hospital",
            BloodType: "A+",
            NumberSends: "3000",
            Location: "Taleex",
            Date: "2/05/2024"
        },
        {
            name: "Care Plas",
            BloodType: "O+",
            NumberSends: "600",
            Location: "Madiino",
            Date: "2/22/2024"
        },
    ]
    
    return <div className="bg-fourthColor pb-4 mb-3 w-[65%] h-[70%] ml-[25%] mt-10 rounded-2xl shadow-2xl">
        <div className="flex justify-between px-2 pb-3">
            <h1 className="text-3xl text-textColor font-semibold pt-4">Latest Messages</h1>
            <input type="text" className="outline-none mt-5 w-40 h-7 border-2 border-fourthColor rounded-lg p-2" placeholder="Search ..." />
        </div>
        <hr className="border-b border-fourthColor" />
        <table className="table-auto w-full">
            <thead className="border-b border-thirdColor">
                <tr className="text-textColor text-left font-medium">
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Blood Type</th>
                    <th className="py-3 px-6">NumberSends</th>
                    <th className="py-3 px-6">Location</th>
                    <th className="py-3 px-6">Date</th>
                </tr>
            </thead>

            {
                data.map((data) => {
                    return <tbody className="border-b border-thirdColor text-textColor">
                        <tr>
                            <td className="py-3 px-6">{data.name}</td>
                            <td className="py-3 px-6">{data.BloodType}</td>
                            <td className="py-3 px-6">{data.NumberSends}</td>
                            <td className="py-3 px-6">{data.Location}</td>
                            <td className="py-3 px-6">{data.Date}</td>
                        </tr>
                    </tbody>
                })
            }
        </table>
    </div>
}

export default LatestMessages