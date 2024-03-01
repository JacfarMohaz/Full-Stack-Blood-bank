import { useEffect, useState } from "react"
import SideNav from "../SideNav"
import SystemHeader from "../SystemHeader"
import axios from "axios"
import Swal from 'sweetalert2'


function AMinus() {

    const [Aminus, setAMinus] = useState([])

    const [subject, setSubject] = useState("")
    const [text, setText] = useState("")

    const handleSendEmail = (e) => {
        e.preventDefault()
        axios.post("http://localhost:7000/aminus/emails", {
            "subject": subject,
            "text": text
        }).then((res) => {
            Swal.fire({
                title: "Succes Email Sends",
                text: "Email Sends all Blood type A-",
                icon: "success"
            })
            setSubject("")
            setText("")
            setIsOpen(false)
        }).catch((error) => console.log(error))
    }

    const handleReadAMinus = () => {
        axios.get("http://localhost:7000/aminus/donors").then((res) => {
            setAMinus(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleReadAMinus()
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
                <h1 className="text-3xl text-textColor font-semibold pt-4">A- BLood</h1>
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
                    Aminus.map((data) => {
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

        <div style={{ display: isOpen === true ? "block" : "" }} className="bg-primeryColor w-[35em] hidden h-[24em] rounded-xl ml-[66%] pt-16 absolute top-36 right-60">
            <h1 className="text-4xl font-semibold absolute top-5 left-36 text-textColor">Send Message</h1>
            <div className="flex justify-around pt-5">
                <i onClick={handleIsClose} class="fa-solid text-textColor text-4xl cursor-pointer absolute top-0 right-2 fa-xmark"></i>
                <form className="">
                    <label className="text-2xl text-textColor">Subject</label><br />
                    <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-60 h-10 rounded-xl outline-none p-2 bg-gray-300" type="text" placeholder="Subject" /><br />
                    <label className="text-2xl text-textColor">Text</label> <br />
                    <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-60 h-28 rounded-xl outline-none p-2 bg-gray-300" id="" cols="30" rows="5" placeholder="Text"></textarea> <br />
                    <button onClick={handleSendEmail} className="bg-fourthColor text-primeryColor px-10 py-2 rounded-lg font-semibold ml-10 mt-2 text-xl">Send</button>
                </form>
            </div>
        </div>

    </div>
}

export default AMinus