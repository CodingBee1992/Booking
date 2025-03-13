import { BiSolidPlaneAlt } from 'react-icons/bi'
import { Link } from 'react-router'

const Navbar = () => {
	return (
		<div>
			<div className="flex justify-between max-w-[800px] m-auto p-4">
				<Link to="/Booking/">
					<div className="flex gap-1.5 items-center text-blue-400">
						<BiSolidPlaneAlt className="size-[2rem] " />
						<span className="w-full text-2xl font-semibold">Booking Hotels</span>
					</div>
				</Link>
				<Link to="/Booking/AllHotels">
					<div>
						<button className=" py-2 px-7 font-semibold rounded-full text-white bg-blue-400 cursor-pointer hover:bg-blue-800 duration-700">
							Book Now
						</button>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Navbar
