import { useParams } from 'react-router'
import { allHotels, facilities, rooms } from '../data'
import Navbar from '../components/Navbar'
import { FaCircleArrowLeft, FaCircleArrowRight, FaCircleXmark, FaLocationDot } from 'react-icons/fa6'
import { GiDoubleStreetLights } from 'react-icons/gi'
import { MdPool } from 'react-icons/md'
import { FaCity } from 'react-icons/fa'
import { TbParkingCircle } from 'react-icons/tb'
import Footer from '../components/Footer'
import { useState } from 'react'

const HotelPage = () => {
	const [open, setOpen] = useState(false)
	const [sliderNumber, setSliderNumber] = useState(0)

	const handleOpen = i => {
		setSliderNumber(i)
		setOpen(true)
	}
	const handleMove = direction => {
		let newSliderNumber

		if (direction === 'l') {
			newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1
		} else {
			newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1
		}

		setSliderNumber(newSliderNumber)
	}
	const { id } = useParams()

	const hotel = allHotels.find(hotel => hotel.id === +id)
	return (
		<div className='relative'>
			<Navbar />
			<div >
				{open && (
					<div className='fixed top-0 bg-[rgba(0,0,0,.7)] h-dvh w-full'>
						<FaCircleXmark className='absolute top-5 right-5 size-8 stroke-black text-gray-300 cursor-pointer' onClick={() => setOpen(false)} />
						<FaCircleArrowLeft className='absolute top-[50%] translate-y-[-50%] left-4 size-10 text-gray-300 cursor-pointer' onClick={() => handleMove('l')} />
						<div className='flex h-full items-center justify-center'>
							<img className='w-[1000px] h-[600px] object-cover' src={rooms[sliderNumber].image} alt="" />
						</div>
						<FaCircleArrowRight className='absolute top-[50%] translate-y-[-50%] right-5 size-10 text-gray-300 cursor-pointer' onClick={()=> handleMove("r")}/>
					</div>
				)}
				<div className='p-4 mr-auto ml-auto max-w-[1300px]'>
					<h1 className='text-[20px] font-semibold mb-1.5'>{hotel.title}</h1>
					<div className='flex items-center gap-2'>
						<FaLocationDot />
						<span>{hotel.location}</span>
					</div>
					<div className='flex flex-col gap-3 mt-3 mb-3'>
					<span className='text-teal-500'>Excelent Location - 400m from center</span>
					<span className='text-green-400'>Enjoy a comfortable stay starting at ${hotel.price} per night</span>
					</div>
					<div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
						{rooms.map((room, i) => (
							<div key={i} >
								<img className='w-full h-[300px] object-cover cursor-pointer' onClick={()=> handleOpen(i)} src={room.image} alt={room.title} />
							</div>
						))}
					</div>
					<div className='flex flex-col md:flex-row gap-3 mt-5 md:mt-10'>
						<div>
							<h1 className='mb-2 text-[20px] font-semibold'>About this hotel</h1>
							<p className='pb-4 border-b-[2px] border-gray-400'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum facilis aspernatur quibusdam,
								reprehenderit rerum quidem quos ducimus consequuntur aut ea!
							</p>
							<div className='mt-5'>
								<h1 className='text-[20px] font-semibold'>Hotel Facilities</h1>
								<div className='grid grid-cols-2 gap-3 mt-4 mb-5 '>
									{facilities.map(facilitie => (
										<div className='flex gap-2 items-center' key={facilitie.id}>
											<span>{facilitie.icon}</span>
											<span>{facilitie.title}</span>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-2 p-4 bg-blue-200'>
							<h1 className='text-[20px] font-semibold mb-3'>Hotel highlights</h1>
							<h4 className='text-[18px] font-semibold'>Perfect for a 5-nights stay</h4>
							<span>Located in the real heart of Cracov. this property has an exccellent location score of 9.9!</span>
							<h4 className='text-[18px] font-semibold'>Breakfast info</h4>
							<span>Continental, Fresh, Indulgent, Protein-packed, Savor, Gourmet</span>
							<h4 className='text-[18px] font-semibold'>Rooms With</h4>
							<ul className='flex flex-col gap-2'>
								<li className='flex gap-3 items-center'>
									<GiDoubleStreetLights /> Quiet street view
								</li>
								<li className='flex gap-3 items-center'>
									<MdPool /> Pool with a view
								</li>
								<li className='flex gap-3 items-center'>
									<FaCity /> City view
								</li>
								<li className='flex gap-3 items-center'>
									<TbParkingCircle /> Free Parking
								</li>
							</ul>
							<button className='ml-auto mr-auto mt-3 w-[250px] p-2 text-white bg-blue-400 rounded-[8px] hover:bg-blue-800 duration-500 cursor-pointer'>Book Now!</button>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default HotelPage
