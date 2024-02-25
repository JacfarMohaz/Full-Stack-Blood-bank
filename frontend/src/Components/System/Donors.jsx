import SideNav from "./SideNav"
import SystemHeader from "./SystemHeader"

function Donors () {
    const data = [
        {
            FullName: "Ahmed Hisrsi Jama",
            Address: "Hodan",
            Email: "ah@gmail.com",
            Phone: "61662626",
            Gender: "Male",
            Age: "24",
            BloodType: "A+",
        },
        {
            FullName: "Ahmed Hisrsi Jama",
            Address: "Hodan",
            Email: "ah@gmail.com",
            Phone: "61662626",
            Gender: "Male",
            Age: "24",
            BloodType: "A+",
        },
        {
            FullName: "Ahmed Hisrsi Jama",
            Address: "Hodan",
            Email: "ah@gmail.com",
            Phone: "61662626",
            Gender: "Male",
            Age: "24",
            BloodType: "A+",
        },
        {
            FullName: "Ahmed Hisrsi Jama",
            Address: "Hodan",
            Email: "ah@gmail.com",
            Phone: "61662626",
            Gender: "Male",
            Age: "24",
            BloodType: "A+",
        },
    ]

    return <div>
        <SideNav />
        <SystemHeader />
        <div className="bg-fourthColor pb-4 mb-3 w-[75%] h-[70%] ml-[22%] mt-10 rounded-2xl shadow-2xl">
        <div className="flex justify-between px-2 pb-3">
            <h1 className="text-3xl text-textColor font-semibold pt-4">Latest Messages</h1>
            <input type="text" className="outline-none mt-5 w-40 h-7 border-2 border-fourthColor rounded-lg p-2" placeholder="Search ..." />
        </div>
        <hr className="border-b border-fourthColor" />
        <table className="table-auto w-full">
            <thead className="border-b border-thirdColor">
                <tr className="text-textColor text-left font-medium">
                    <th className="py-3 px-6">FullName</th>
                    <th className="py-3 px-6">Address</th>
                    <th className="py-3 px-6">Email</th>
                    <th className="py-3 px-6">Phone</th>
                    <th className="py-3 px-6">Gender</th>
                    <th className="py-3 px-6">Age</th>
                    <th className="py-3 px-6">BloodType</th>
                    <th className="py-3 px-6">Action</th>
                </tr>
            </thead>

            {
                data.map((data) => {
                    return <tbody className="border-b border-thirdColor text-textColor">
                        <tr>
                            <td className="py-3 px-6">{data.FullName}</td>
                            <td className="py-3 px-6">{data.Address}</td>
                            <td className="py-3 px-6">{data.Email}</td>
                            <td className="py-3 px-6">{data.Phone}</td>
                            <td className="py-3 px-6">{data.Gender}</td>
                            <td className="py-3 px-6">{data.Age}</td>
                            <td className="py-3 px-6">{data.BloodType}</td>
                            <td className="py-3 px-6"><i class="fa-solid fa-trash-can text-primeryColor"></i></td>
                        </tr>
                    </tbody>
                })
            }
        </table>
    </div>

    </div>
}

export default Donors