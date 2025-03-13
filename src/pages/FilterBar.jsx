import { FaChevronDown } from "react-icons/fa"
import { filterOptions } from "../data"


const FilterBar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-6 bg-gray-200">
        <div>
            <span className="inline-flex justify-center items-center gap-2 px-6 py-2 w-[180px] bg-white rounded-full cursor-pointer">Price <FaChevronDown/></span>
        </div>
        {filterOptions.map((filter,index)=>(
            <div key={index}>
                <span className="inline-flex justify-center items-center gap-2 px-6 py-2 w-[180px] bg-white rounded-full cursor-pointer">{filter.title} <FaChevronDown/></span>
            </div>
        ))}
    </div>
  )
}

export default FilterBar