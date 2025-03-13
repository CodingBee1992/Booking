import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { filterOptions } from '../data'
import { useState } from 'react'

const FilterBar = () => {
	const [open, setOpen] = useState(false)
	const [minPrice, setMinPrice] = useState(250)
	const [maxPrice, setMaxPrice] = useState(500)
	const [priceRange, setPriceRange] = useState([minPrice, maxPrice])

	const [openFilter, setOpenFilter] = useState(null)

	const handleFilter = e => {
		const values = e.target.value.split(',').map(Number)
		setPriceRange(values)
		setMinPrice(values[0])
		setMaxPrice(values[1])
	}
	const handleOpenFilter = index => {
		setOpenFilter(openFilter === index ? null : index)
	}
	return (
		<div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-6 bg-gray-200">
			<div className="relative">
				<span
					onClick={() => setOpen(!open)}
					className="inline-flex justify-center items-center gap-2 px-6 py-2 w-[180px] bg-white rounded-full cursor-pointer">
					Price {open ? <FaChevronUp /> : <FaChevronDown />}
				</span>

				{open && (
					<div className="absolute top-[3rem] left-[-2.5rem] flex flex-col gap-2 p-4 w-[250px] bg-white shadow-[0px_0px_10px_#000] rounded-2xl">
						<div className="font-semibold">Price</div>
						<div>
							<input
								className="w-full accent-blue-400  "
								type="range"
								min={0}
								max={500}
								value={priceRange}
								onChange={handleFilter}
							/>
							<div className="flex justify-between">
								<span>${priceRange[0]}</span>
								<span>$500</span>
							</div>
							<div className="flex items-center gap-3 mt-3">
								<div
									className=" w-[100px] px-2  border-gray-300 rounded-[8px] border-[1px]"
									value={minPrice}
									onChange={e => setMinPrice(e.target.value)}>
									Min Price <span>${minPrice}</span>
								</div>
								<span>-</span>
								<div
									className=" w-[100px] px-2  border-gray-300 rounded-[8px] border-[1px]"
									value={maxPrice}
									onChange={e => setMaxPrice(e.target.value)}>
									Max Price <span>$500</span>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			{filterOptions.map((filter, index) => (
				<div className="relative" key={index}>
					<span
						onClick={() => handleOpenFilter(index)}
						className="inline-flex justify-center items-center gap-2 px-6 py-2 w-[180px] bg-white rounded-full cursor-pointer">
						{filter.title} {openFilter === index ? <FaChevronUp /> : <FaChevronDown />}
					</span>

					{openFilter === index && (
						<div className="absolute top-[3rem] left-[-2.5rem] flex flex-col gap-2 p-4 w-[250px] bg-white shadow-[0px_0px_10px_#000] rounded-2xl">
							<div className="font-semibold">{filter.title}</div>
							{filter.options.map((option)=>(
                <label className='flex gap-2 p-1 text-[18px]' key={option}>
                  <input className='w-[20px]  accent-blue-400 ' type='checkbox' />{option}
                </label>
              ))}
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default FilterBar
