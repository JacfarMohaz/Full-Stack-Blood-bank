import { useEffect, useState } from "react"
import axios from "axios"

function LatestMessages() {

    const [messages, setMessages] = useState([])

    const handleLatestMessages = () => {
        axios.get("http://localhost:7000/latest/message").then((res) => {
            setMessages(res.data)
            console.log(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleLatestMessages()
    }, [])
    
    return <div className="bg-fourthColor pb-4 mb-3 w-[65%] h-[70%] ml-[25%] mt-10 rounded-2xl shadow-2xl">
        <div className="flex justify-between px-2 pb-3">
            <h1 className="text-3xl text-textColor font-semibold pt-4">Latest Messages</h1>
        </div>
        <hr className="border-b border-fourthColor" />
        <table className="table-auto w-full">
            <thead className="border-b border-thirdColor">
                <tr className="text-textColor text-center font-medium">
                    <th className="py-3 px-6">UserName</th>
                    <th className="py-3 px-6">Blood Type</th>
                    <th className="py-3 px-6">Date</th>
                </tr>
            </thead>

            {
                messages.map((data) => {
                    return <tbody className="border-b border-thirdColor text-textColor">
                        <tr className="text-center">
                            <td className="py-3 px-6">{data.userName}</td>
                            <td className="py-3 px-6">{data.bloodType}</td>
                            <td className="py-3 px-6">{new Date(data.createdAt).toDateString()}</td>
                        </tr>
                    </tbody>
                })
            }
        </table>
    </div>
}

export default LatestMessages