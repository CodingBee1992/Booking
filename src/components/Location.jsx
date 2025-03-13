import { CiLocationOn } from "react-icons/ci"


const Location = () => {
  return (
    <div>
        <div className="flex items-center gap-3 border-gray-400 lg:border-r-[1px]">
            <div>
                <CiLocationOn className="size-6 text-green-500"/>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-[18px] font-semibold">Location</label>
                <input type="text" className=" rounded-[8px] outline-none " placeholder="where are you going" />
            </div>
        </div>
    </div>
  )
}

export default Location