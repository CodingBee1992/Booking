import { services } from "../data"


const Services = () => {
  return (
    <div className="flex flex-col items-center mt-15 ">
        <h1 className="text-3xl text-blue-400">Our Services</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full max-w-[1300px] gap-6 p-4 ">
            {services.map((serv)=>(
                <div className="flex flex-col" key={serv.id}>
                    <img className="h-[150px] rounded-t-2xl  object-cover " src={serv.image} alt={serv.title} />
                    <div className="flex flex-col gap-2 mt-4">
                        <h1 className="text-[20px] text-blue-400 font-semibold">{serv.title}</h1>
                        <p>{serv.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services