import { useEffect, useState } from 'react'
import axios from 'axios'
import  Search from '../components/Search'
const BASE_URL = 'http://localhost:3001'

// Checkbox idea from: https://www.codingdeft.com/posts/react-checkbox/

export const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <div className='checkbox'>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor={`checkbox-${index}`}>{label}</label>
    </div>
  )
}
 
const UserRide = (props) => {
  const [rideDetails, setRideDetails] = useState(null)
  const [isResponse, setIsResponse] = useState(null)

  useEffect(() =>  {
    const getRideDetails = async () => {
      let res = await axios.get(`${BASE_URL}/rides`)
      setIsResponse(true)
      setRideDetails(res.data)

    }
      getRideDetails()
    },[])

      const [rides, setRide] = useState({checkRide: ""})
    
      const updateCheckStatus = index => {
        setRide(
          rides.map((ride, currentIndex) =>
            currentIndex === index
              ? { ...ride, checked: !ride.checked }
              : ride
          )
        )
      }
    let showDetails


    if(isResponse){
      showDetails = rideDetails.map((ride, index) => (
        <Checkbox
          key={ride._id}
          checkHandler={() => updateCheckStatus(checkRide = ride._id)}
          label={ride.name}
          index={index}
        />

      ))
      console.log(rides)}

      return (
        <div className="rideDetails">
          <div >
            <h2>Reserve Ride Queue Position</h2>
          </div>
          <Search />
          {showDetails}
        </div>
      )
  }
export default UserRide