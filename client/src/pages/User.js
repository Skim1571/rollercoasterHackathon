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
      console.log(res.data)
      setIsResponse(true)
      setRideDetails(res.data)

    }
      getRideDetails()
    },[])

      const [rides, setRide] = useState(rideDetails)
    
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
          isChecked={ride.checked}
          checkHandler={() => updateCheckStatus(index)}
          label={ride.name}
          index={index}
        />
      ))}
      return (
        <div className="rideDetails">
              <div >
            <h2>Reserve Ride Queue Position</h2>
            </div>
          <form onSubmit={props.onSubmit}>
            <input
              type="text"
              name="search"
              value={props.value}
              placeholder="Name"
              onChange={(event) => props.onChange(event)}
            />
            <button type="submit">Submit</button>
          </form>
          {showDetails}
        </div>
      )
  }
export default UserRide