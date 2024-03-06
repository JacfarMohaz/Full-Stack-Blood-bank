import { useRef, useState } from "react"
import somLogoPNG from "../../assets/som blood bank logo.png"
import { Link, NavLink } from "react-router-dom"

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const HandleIsOpen = () => {
        setIsOpen(true)
    }

    const HandleIsClose = () => {
        setIsOpen(false)
    }

    const aboutRef = useRef(null);

  const handleLinkClick = (section) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth',  });
    }
  };


    return <div className="sticky top-0 bg-white">
        {/* big screen section */}

        <div style={{ border: isOpen === true ? "none" : "" }} className="sm:px-5 flex justify-between sm:items-center border-b-2 border-fourthColor shadow-sm max-w-[1640px] mx-auto">
            <div>
                <Link to="/"><img className="sm:w-24 w-28" src={somLogoPNG} /></Link>
            </div>
            <i onClick={HandleIsOpen} style={{ display: isOpen === true ? "none" : "" }} class="fa-solid text-6xl text-seconderyColor flex sm:hidden absolute top-7 right-5 fa-bars"></i>
            <i onClick={HandleIsClose} style={{ display: isOpen === true ? "block" : "" }} class="fa-solid text-6xl text-seconderyColor hidden absolute top-7 right-6 fa-xmark"></i>

            <div className="sm:flex hidden text-3xl space-x-10 font-semibold font-mono text-primeryColor">
                <NavLink onClick={() => handleLinkClick("showcase")}>Home</NavLink>
                <NavLink onClick={() => handleLinkClick("about")}>About</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </div>


            <div className="sm:flex hidden">
                <Link to="/donateblood" className="bg-primeryColor px-6 py-2 rounded-lg text-textColor text-xl">Donate Blood</Link>
            </div>

        </div>

        {/* samll screen section */}

        <div style={{ display: isOpen === true ? "block" : "" }} className="hidden border-b-2 border-fourthColor shadow-sm">
            <ul className="sm:hidden text-3xl space-y-5 pl-4 font-semibold font-mono text-primeryColor">
                <Link to="/"><li className="hover:bg-fourthColor" onClick={() => handleLinkClick("showcase")}>Home</li></Link>
                <Link><li className="hover:bg-fourthColor" onClick={() => handleLinkClick("about")}>About</li></Link>
                <Link to="/blog"><li className="hover:bg-fourthColor">Blog</li></Link>
            </ul>


            <div className="sm:hidden pl-4 pt-5 pb-3">
                <button className="bg-primeryColor px-6 py-2 rounded-lg text-textColor text-xl">Donate Blood</button>
            </div>
        </div>

    </div>
}


export default Header