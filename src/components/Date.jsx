import { BsArrowRight } from 'react-icons/bs'
import { IoCalendarOutline } from 'react-icons/io5'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
const Date = () => {
	const [startDate, setStartDate] = useState(null)
	const [endDate, setEndDate] = useState(null)

	return (
		<div className='flex flex-col gap-3 lg:flex-row'>
			<div className='flex  items-center gap-3'>
				<IoCalendarOutline className='size-6'/>
				<div className='flex flex-col gap-1'>
					<label className="text-[18px] font-semibold">Check-In</label>
					<DatePicker
					className=" rounded-[8px] outline-none "
						selected={startDate}
						onChange={date => setStartDate(date)}
						selectsStart
						startDate={startDate}
						endDate={endDate}
						placeholderText="Add Date"
						dateFormat={'MM/dd/yyyy'}
					/>
				</div>
			</div>
			<span className='flex justify-center items-center'>

				<BsArrowRight className='size-5 '/>
			</span>
			<div className='flex  items-center gap-3 border-gray-400 lg:border-r-[1px]'>
				<IoCalendarOutline className='size-6'/>
				<div className='flex flex-col gap-1'>
					<label className="text-[18px] font-semibold">Check-Out</label>
					<DatePicker
					className="rounded-[8px] outline-none "
						selected={endDate}
						onChange={date => setEndDate(date)}
						selectsEnd
						startDate={startDate}
						endDate={endDate}
						minDate={startDate}
						placeholderText="Add Date"
						dateFormat={'MM/dd/yyyy'}
					/>
				</div>
			</div>
		</div>
	)
}

export default Date
