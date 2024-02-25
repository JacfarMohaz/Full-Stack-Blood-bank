import somLogoPNG from "../../assets/som blood bank logo.png"


function Footer() {
    return <div>

        <div className="sm:flex justify-between sm:px-40 mt-8 sm:mt-0 pb-5">
            <div className="pl-5 sm:pl-0">
                <img className="sm:w-40 sm:ml-0 ml-10 w-60" src={somLogoPNG} />
                <h1 className="text-thirdColor text-md">som blood bank is a web application that we intend <br />
                    to help our people when there is an urgent <br />
                    situation and need blood, <br /> <br />
                    please register on the website <br />
                    to help us in a difficult situation</h1>
                <button className="bg-primeryColor px-6 py-2 mt-4 rounded-lg text-textColor text-xl">Register Here</button>
            </div>

            <div className="pt-20 pl-10 sm:pl-0">
                <h1 className="text-3xl font-semibold pb-5 text-primeryColor">Explore</h1>
                <p className="text-seconderyColor text-2xl pb-2 hover:text-primeryColor cursor-pointer">Home</p>
                <p className="text-seconderyColor text-2xl pb-2 hover:text-primeryColor cursor-pointer">About</p>
                <p className="text-seconderyColor text-2xl pb-2 hover:text-primeryColor cursor-pointer">Blog</p>
            </div>

            <div className="pt-20 pl-10 sm:pl-0">
                <h1 className="text-3xl font-semibold pb-5 text-primeryColor">Get in Touch</h1>
                <p className="text-seconderyColor text-xl pb-2 flex"><div className="mt-3 bg-primeryColor w-8 h-8 rounded-full"><i class="fa-solid text-fourthColor pl-2 fa-location-dot"></i></div> <span className="pl-3">Taleex, Hodan district <br /> Mogadishu, Somalia.</span></p>
                <p className="text-seconderyColor text-xl pb-2 flex"><div className="mt-3 bg-primeryColor w-9 h-9 rounded-full"><i class="fa-solid text-fourthColor pl-2 pt-2 fa-headset"></i></div><span className="pl-3 pt-3">61xxxxxxx</span></p>
                <p className="text-seconderyColor text-xl pb-2 flex"><div className="mt-3 bg-primeryColor w-9 h-9 rounded-full"><i class="fa-regular text-fourthColor pl-2 pt-2 fa-envelope"></i></div><span className="pl-3 pt-3">info@somblood.so</span></p>
            </div>

        </div>

        <div>
            <hr className="sm:w-[80%] w-[23em] border-b-2 border-fourthColor mb-2 sm:ml-36 ml-8" />
            <h1 className="text-fourthColor text-center pb-2">Copyright <i class="fa-regular fa-copyright"></i> 2024 JM9. All Rights Reserved By</h1>
        </div>
    </div>
}

export default Footer