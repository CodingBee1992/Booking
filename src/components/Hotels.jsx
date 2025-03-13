import { CiLocationOn } from 'react-icons/ci'

const Hotels = ({ hotels, heading }) => {
	return (
		<div className="flex flex-col items-center">
			<h1 className=" text-4xl text-blue-400">{heading}</h1>
			<div className="flex flex-wrap justify-center gap-6 p-4  max-w-[1300px]">
				{hotels.map(hotel => (
					<div
						key={hotel.id}
						className="flex flex-col  w-full lg:w-[400px] mt-7 rounded-2xl overflow-hidden shadow-[0px_0px_5px_#626262]">
						<img className="h-[300px] object-cover" src={hotel.image} alt={hotel.title} />
						<div className="flex flex-col gap-5 p-4">
							<div className="flex items-center gap-2 text-[18px]">
								<CiLocationOn />
								{hotel.location}
							</div>
							<div className="flex items-center pb-7 gap-4 border-b-[1px] border-gray-400">
								<button className="p-2 font-semibold bg-blue-400 text-white">{hotel.rate}</button>
								<span>{hotel.review}</span>
							</div>
							<span className='text-gray-500'>
								From: <span className="text-black font-semibold">${hotel.price} </span>/night
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Hotels
