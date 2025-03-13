import discover from '../assets/discover.jpg'

const Newsletter = () => {
  return (
    <div className='flex items-center justify-center mt-15 p-4'>
        <div className='flex flex-col w-full  md:items-center md:flex-row rounded-2xl max-w-[1300px] overflow-hidden bg-gray-200'>
            <div className='md:w-[50%]'>
                <img className='h-[300px] w-full object-cover' src={discover} alt="" />
            </div>
            <div className='flex flex-col items-center gap-5 p-7 md:w-[50%]' >
                <h1 className='text-3xl text-center font-bold'>Explore the world with us</h1>
                <p className='text-gray-500 text-center'>Subscirebe to see secret deals prices drop the moment you sign up!</p>
                <div className='flex gap-6 p-2 rounded-full border-[1px] border-gray-400'>
                    <input className='outline-none bg-gray-100 rounded-full p-2 ' type="text" placeholder='Enter your email' />
                    <button className='px-5 py-2 text-white bg-blue-400 rounded-full hover:bg-blue-800 duration-500 cursor-pointer'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter