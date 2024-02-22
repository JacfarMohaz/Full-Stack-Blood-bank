import { useEffect, useState } from "react"

function ShowCase() {

    const slide = [
        {
            url: "https://images.pexels.com/photos/12820069/pexels-photo-12820069.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Every drop of blood donated is a lifeline extended"
        },
        {
            url: "https://img.freepik.com/free-photo/nurse-holding-blood-test-tube_53876-139594.jpg?t=st=1708539343~exp=1708542943~hmac=5b3a9b685d207bc6c935690857b41d2305e269c369d0efe5229dcf6979d5fd6d&w=900",
            text: "a gift of hope that"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZiNNUdKq7o9MQoYeLPWbYk_Lrs7kz-_lsfQ&usqp=CAU",
            text: "transcends boundaries and saves lives."
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slide.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [currentIndex])

    return <div className="max-w[1400px] h-[480px] w-full m-auto py-5 px-4 mt-5 relative group">
        <div style={{ backgroundImage: `url(${slide[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
            <div className="absolute sm:top-[6em] top-80 sm:left-10 left-0 right-0 bottom-0 flex sm:justify-start justify-center sm:items-start items-center text-primeryColor sm:text-5xl text-2xl sm:pl-0 sm:pr-0 pl-8 pr-4  font-bold">{slide[currentIndex].text}</div>
        </div>

        <div className="hidden group-hover:block: absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-textColor cursor-pointer">
            <i onClick={nextSlide} class="fa-solid text-4xl fa-chevron-right"></i>
        </div>
        <div className="hidden group-hover:block: absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-textColor cursor-pointer">
            <i onClick={prevSlide} class="fa-solid text-4xl fa-chevron-left"></i>
        </div>

    </div>
}

export default ShowCase