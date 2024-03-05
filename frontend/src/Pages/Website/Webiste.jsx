import Header from "../../Components/Website/Header"
import ShowCase from "../../Components/Website/ShowCase"
import About from "./About"
import Footer from "../../Components/Website/Footer"
// import { useNavigate } from "react-router-dom"
// import { useEffect } from "react"

function Website() {

    // const isAuth = localStorage.getItem("user")

    // const navigate = useNavigate()

    // const handleAuth = () => {
    //     if(isAuth){
    //         navigate("/")
    //     }
    //     else {
    //         navigate("/")
    //     }
    // }

 

    return <div>
        <Header />
        <ShowCase />
        <About />
        <Footer />
    </div>
}

export default Website