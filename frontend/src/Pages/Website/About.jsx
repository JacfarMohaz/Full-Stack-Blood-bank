import LogoPNG from "../../assets/logo jpg.png"



function About() {
    return <div id="about" className="max-w[1400px] mx-auto w-full sm:h-[38em] h-[75em] bg-fourthColor mt-10">
        <h1 className="text-5xl font-bold text-center text-primeryColor pt-8">About Us</h1>
        <div className="sm:flex px-5 sm:px-0 justify-center items-center gap-20 pt-10">
            <img className="w-52 h-52 rounded-full sm:ml-0 ml-20" src={LogoPNG} />
            <h1 className="text-xl text-primeryColor font-bold sm:pt-0 pt-4 ">SOM Blood Bank Management System is a software application <br />
                designed to improve and streamline the processes involved in <br />
                the operation of a blood bank <br />
                or blood donation center.</h1>
        </div>

        <div className="sm:flex justify-center pt-10">
            <div className="bg-seconderyColor max-w[1400px] hover:bg-primeryColor cursor-pointer mx-auto  sm:w-[28em] w-[24em] sm:h-48 h-62 sm:mb-0 mb-20 rounded-lg">
                <h1 className="text-4xl text-center text-textColor font-semibold pt-2">Mission</h1>
                <p className="text-textColor px-12 py-5">To efficiently manage the supply and distribution <br />
                    of blood products, ensuring timely access to <br />
                    safe and compatible blood for patients <br />
                    in need, while fostering community</p>
            </div>
            <div className="bg-seconderyColor max-w[1400px] hover:bg-primeryColor cursor-pointer mx-auto sm:w-[28em] w-[24em] sm:h-48 h-62 sm:mb-0 mb-20 rounded-lg">
                <h1 className="text-4xl text-center text-textColor font-semibold pt-2">Vision</h1>
                <p className="text-textColor px-12 py-5">To efficiently manage the supply and distribution <br />
                    of blood products, ensuring timely access to <br />
                    safe and compatible blood for patients <br />
                    in need, while fostering community</p>
            </div>
        </div>

    </div>
}

export default About