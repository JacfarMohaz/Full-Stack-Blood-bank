import { Link } from "react-router-dom"

function UserData(props) {
    return <tbody className="border-b border-thirdColor">
    <tr className="text-textColor text-center">
        <td className="py-4">{props.userName}</td>
        <td className="py-4">{props.email}</td>
        <td className="py-4">{props.role}</td>
        <td className="py-4">{props.date}</td>
        <td className="py-4">
            <Link to={`/updateusers/${props.UpdateID}`}><i class="fa-solid cursor-pointer text-blue-600 fa-pen-to-square"></i></Link>
            <i onClick={props.deleteUser} class="fa-solid cursor-pointer fa-trash-can pl-4 text-primeryColor"></i>
        </td>
    </tr>
</tbody>
}

export default UserData