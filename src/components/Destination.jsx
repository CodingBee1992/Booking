import { destinations } from "../data"


const Destination = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-13">
        <h1 className="mb-8 text-4xl font-semibold text-blue-400">Best Destinations</h1>
        <div className="flex flex-wrap justify-center  max-w-[1300px] p-4 gap-6 ">
            {destinations.map((dest)=>(
                <div key={dest.id} className="relative flex flex-col gap-4 w-full lg:w-[400px] rounded-[8px] overflow-hidden">
                    <img className="h-[300px] object-cover rounded-[8px] hover:scale-105 duration-500"  src={dest.image} alt={dest.title} />
                    <div className="absolute left-2 text-white text-2xl font-semibold">
                        <h1>{dest.title}</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Destination