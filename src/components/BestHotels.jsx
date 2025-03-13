import { hotels } from "../data"
import Hotels from "./Hotels"


const BestHotels = () => {
  return (
    <div>
        <Hotels hotels={hotels} heading="Best Hotels"/>
    </div>
  )
}

export default BestHotels