import { useState, useEffect } from "react"
import SideNav from "../SideNav"
import SystemHeader from "../SystemHeader"
import axios from "axios"

function BPlas() {
    
    const [BPlas, setBplas] = useState([])

    const handleReadBPlas = () => {
        axios.get("http://localhost:7000/bplas/donors").then((res) => {
            setBplas(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleReadBPlas()
    }, [])

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
                <h1 className="text-3xl text-textColor font-semibold pt-4">B+ BLood</h1>
                <button onClick={handleIsOpen} className="bg-primeryColor px-6 py-1 mt-4 mr-4 rounded-lg text-textColor">Send Message</button>
            </div>
            <hr className="border-b border-thirdColor" />
            <table className="table-auto w-full mt-4">
                <thead className="border-b border-thirdColor">
                    <tr className="text-textColor text-center  font-medium">
                        <th className="py-2">FullName</th>
                        <th className="py-2">Address</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">Phone</th>
                        <th className="py-2">Gender</th>
                        <th className="py-2">Age</th>
                        <th className="py-2">BloodType</th>
                    </tr>
                </thead>

                {
                    BPlas.map((data) => {
                        return <tbody className="border-b border-thirdColor">
                            <tr className="text-textColor text-center">
                                <td className="py-4">{data.fullName}</td>
                                <td className="py-4">{data.address}</td>
                                <td className="py-4">{data.email}</td>
                                <td className="py-4">{data.phone}</td>
                                <td className="py-4">{data.gender}</td>
                                <td className="py-4">{data.age}</td>
                                <td className="py-4">{data.bloodType}</td>
                            </tr>
                        </tbody>
                    })
                }
            </table>
        </div>

        <div style={{ display: isOpen === true ? "block" : "" }} className="bg-primeryColor w-[35em] hidden h-[18em] rounded-xl ml-[66%] pt-16 text-textColor absolute top-36 right-60">
            <h1 className="text-4xl font-semibold absolute top-5 left-36">Send Message</h1>
            <div className="flex justify-around pt-10">
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

export default BPlas