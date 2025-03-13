import { FaLocationDot } from "react-icons/fa6"
import { destinations, info, services } from "../data"
import { FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"


const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-18 p-5 bg-gray-200">
        <div className="grid grid-cols-2  md:grid-cols-4 justify-center gap-6 p-4 w-full max-w-[1300px]">
            <ul className="flex flex-col gap-1">
                <h2 className="text-[18px] font-semibold mb-3">Destinations</h2>
                {destinations.map((dest)=>(
                    <li  key={dest.id}>{dest.title}</li>
                ))}
            </ul>
            <ul className="flex flex-col gap-1">
                <h2 className="text-[18px] font-semibold mb-3">Information</h2>
                {info.map((item)=>(
                    <li   key={item.id}>{item.title}</li>
                ))}
            </ul>
            <ul className="flex flex-col gap-1">
                <h2 className="text-[18px] font-semibold mb-3">Services</h2>
                {services.map((serv)=>(
                    <li  key={serv.id}>{serv.title}</li>
                ))}
            </ul>
            <ul className="flex flex-col gap-3">
                <h2 className="text-[18px] font-semibold mb-3">Contact</h2>
                <li className="flex gap-2 items-center"><FaLocationDot  className="text-blue-800"/> Nowhere</li>
                <li className="flex gap-2 items-center">
                    <FaPhoneAlt  className="text-blue-800"/> +777 777 777
                </li>
                <li className="flex gap-2 items-center">
                    <IoMdMail className="text-blue-800"/> nowhere@nowhere.com
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer