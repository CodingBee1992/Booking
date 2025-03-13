import { HiOutlineSquares2X2 } from "react-icons/hi2"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import { allHotels } from "../data"
import FilterBar from "./FilterBar"
import { BsGrid3X2Gap } from "react-icons/bs"
import Hotels from "../components/Hotels"
import Footer from "../components/Footer"


const AllHotels = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <FilterBar/>
        <div className="flex justify-between ml-auto mr-auto w-full mt-10 px-4 max-w-[1300px]">
            <h2 className="text-[20px] text-gray-500">{allHotels.length} Hotels Found</h2>
            <div className="flex gap-2">
                <HiOutlineSquares2X2 className="size-6 text-teal-500 hover:text-teal-800 duration-500 cursor-pointer"/>
                <BsGrid3X2Gap className="size-6 text-teal-500 hover:text-teal-800 duration-500 cursor-pointer"/>
            </div>
        </div>
        <Hotels hotels={allHotels}/>

        <Footer/>
    </div>
  )
}

export default AllHotels