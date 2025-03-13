
import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { GoPeople } from 'react-icons/go'

const Guests = () => {
	const [openOption, setOpenOption] = useState(false)
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	})
	
	const handleOption = (name, operation) => {
		setOptions(prev => {
			return {
				...prev,
				[name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
			}
		})
	}
	return (
		<div className="flex gap-3 items-center border-gray-400 lg:border-r-[1px]" >
			<div>
				<GoPeople className="size-6" />
			</div>
			<div className="flex flex-col relative gap-1">
				<label className='text-[18px] font-semibold'>Guests</label>
				<span
					onClick={() => setOpenOption(!openOption)}>{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
				{openOption && (
					<div className='flex flex-col gap-3 absolute w-[250px] p-7 top-16 left-[-35px] bg-white shadow-[0_0_20px_#000] rounded-[8px]'>
						<div className='flex justify-between items-center py-3  border-b-[1px]'>
							<span>Adult</span>
							<div className='flex gap-5 items-center '>
								<button className=' p-2 border-[1px] border-red-500 rounded-full' disabled={options.adult <= 1} onClick={() => handleOption('adult', 'd')}>
									<FaMinus className="text-red-500"/>
								</button>
								<span>{options.adult}</span>
								<button className=' p-2 border-[1px] border-green-500 rounded-full' onClick={() => handleOption('adult', 'i')}>
									<FaPlus className="text-green-500"/>
								</button>
							</div>
						</div>
						<div className='flex justify-between items-center py-3  border-b-[1px]'>
							<span>Children</span>
							<div className='flex gap-5 items-center '>
								<button className=' p-2 border-[1px] border-red-500 rounded-full' disabled={options.children <= 1} onClick={() => handleOption('children', 'd')}>
									<FaMinus className="text-red-500" />
								</button>
								<span>{options.children}</span>
								<button className=' p-2 border-[1px] border-green-500 rounded-full' onClick={() => handleOption('children', 'i')}>
									{' '}
									<FaPlus className="text-green-500" />
								</button>
							</div>
						</div>
						<div className='py-3 border-b-[1px]'>
							<div className='flex justify-between items-center'>
							<span>Room</span>
							<div className='flex gap-5 items-center'>
								<button className=' p-2 border-[1px] border-red-500 rounded-full' disabled={options.room <= 1} onClick={() => handleOption('room', 'd')}>
									<FaMinus className="text-red-500" />
								</button>
								<span>{options.room}</span>
								<button className=' p-2 border-[1px] border-green-500 rounded-full' disabled={options.room >= 5} onClick={() => handleOption('room', 'i')}>
									{' '}
									<FaPlus className="text-green-500" />
								</button>
							</div>
							</div>
								{options.room && options.room >= 5 ? <div className='mt-2'>max 5 rooms</div> : null}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Guests
