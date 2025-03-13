
import Date from "./Date"
import Guests from "./Guests"
import Location from "./Location"


const Hero = () => {

   
    
  return (
    <div >
        <div className="flex flex-col items-center justify-center p-4 w-full h-full  md:h-[600px] bg-cover  bg-[url(/src/assets/banner.jpg)]">
            <h1 className="text-white text-6xl font-bold p-4">start your journey with us</h1>
            <p className="text-white font-semibold text-[20px] p-4">Find what makes you happy anytime, anywhere</p>
            <div className="mb-4">
                <div className="flex flex-col lg:flex-row items-center w-[350px] lg:w-full rounded-2xl lg:rounded-full gap-5  bg-white p-4 z-10">
                    <Location />
                    <Date/>
                    <Guests />
                    <div className="text-center">
                        <button className=" py-2 px-6 rounded-full text-white bg-blue-400 hover:bg-blue-800 duration-700 cursor-pointer font-semibold">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero