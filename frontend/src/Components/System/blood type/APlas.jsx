import { useState } from "react"
import SideNav from "../SideNav"
import SystemHeader from "../SystemHeader"

function APlas() {
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

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleIsClose = () => {
        setIsOpen(false)
    }

    return <div>
        <SideNav />
        <SystemHeader />

        <div className="bg-fourthColor pb-4 mb-3 w-[75%] h-[70%] ml-[22%] mt-10 rounded-2xl shadow-2xl">
            <div className="flex justify-between px-2 pb-3">
                <h1 className="text-3xl text-textColor font-semibold pt-4">A+ BLood</h1>
                <button onClick={handleIsOpen} className="bg-primeryColor px-6 py-1 mt-4 mr-4 rounded-lg text-textColor">Send Message</button>
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
                            </tr>
                        </tbody>
                    })
                }
            </table>
        </div>

        <div style={{display: isOpen === true ? "block" : ""}} className="bg-primeryColor w-[35em] hidden h-[18em] rounded-xl ml-[66%] pt-16 text-textColor absolute top-36 right-60">
            <div className="flex justify-around">
                <i onClick={handleIsClose} class="fa-solid text-4xl cursor-pointer absolute top-0 right-2 fa-xmark"></i>
                <div>
                    <i class="fa-solid text-6xl pl-2 fa-envelope"></i>
                    <p className="text-4xl pt-3">Emial</p>
                </div>
                <div>
                    <i class="fa-brands text-6xl pl-10 fa-square-whatsapp"></i>
                    <p className="text-4xl pt-3">WhatsApp</p>
                </div>
            </div>
        </div>

    </div>
}

export default APlas