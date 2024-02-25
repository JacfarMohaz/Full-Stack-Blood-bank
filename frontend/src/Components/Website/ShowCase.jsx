import showCaseImage from "../../assets/showcaseImage.png"
import { TypeAnimation } from 'react-type-animation';

function ShowCase() {

    return <div className="max-w[1400px] h-[480px] w-full sm:flex justify-center gap-20 m-auto py-5 px-4 mt-5">
        <div className="sm:mt-20 max-w-[500px] m-auto">
            <p className="sm:text-3xl text-xl text-primeryColor">Every drop of blood donated is a lifeline extended, <br />
                a gift of hope <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        ' that transcends',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        ' boundaries',
                        1000,
                        ' and saves lives.',
                        1000
                    ]}
                    wrapper="span"
                    speed={70}
                    style={{ fontSize: '32px', display: 'inline-block' }}
                    repeat={Infinity}
                /> </p>
            <button className="bg-primeryColor px-6 py-2 mt-5 sm:mb-0 mb-5 rounded-lg text-textColor text-xl">Donate Blood Here <i class="fa-solid pl-3 fa-arrow-right"></i></button>
        </div>

        <div className="sm:mt-0 mt-5">
            <img className="w-[35em] rounded-lg" src={showCaseImage} />
        </div>

    </div>
}

export default ShowCase