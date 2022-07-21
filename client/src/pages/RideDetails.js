import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const BASE_URL = 'http://localhost:3001'

const RideDetails = () => {
  const [selectedRide, setSelectedRide] = useState(false)
  const [rideDetails, setRideDetails] = useState(null)

  let { rideId } = useParams()

  useEffect(() =>  {
    const getRideDetails = async () => {
      let res = await axios.get(`${BASE_URL}/ride/${rideId}`)
      setRideDetails(res.data)
      setSelectedRide(true)
    }
      getRideDetails()
    },[rideId])

    let rideName;
    let rideImage;
    let rideWait;
    let ridePrice

if(selectedRide){
  rideName = !!rideDetails.name ? rideDetails.name : ''
  rideImage = !!rideDetails.imageUrl ? <img src={rideDetails.imageUrl}/> : ""
  rideWait = !!rideDetails.wait ?  <h3>Average Wait Time: {rideDetails.wait}</h3> : ""
  ridePrice =  !!rideDetails.price ? <h3>Ride Price: {rideDetails.price}</h3> : ""
}


  return  (
    <div className="ride-content">
      <section className="image-container">
        <div>
          {rideImage}
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
        <h3>
          {rideName}
          </h3>
          {ridePrice}
        </div>
        <div>
        {rideWait}
        </div>
      </section>
    </div>
  )
}

export default RideDetails
