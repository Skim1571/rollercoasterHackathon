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
        id={`${index}`}
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

      const [user, setUser] = useState({
        name: '',
        email: '',
        rides: []
      })
    
      const updateCheckStatus = (update) => {
        let newUser = {name: user.name, email: user.email, rides: [...user.rides, update]}
        setUser(newUser)
      }

    let showDetails


    if(isResponse){
      showDetails = rideDetails.map((ride) => (
        <Checkbox
          key={ride._id}
          checkHandler={() => updateCheckStatus(ride._id)}
          label={ride.name}
          index={ride._id}
        />
      ))
    }

      const postUser = async (event) => {
        event.preventDefault()
        console.log(user)
        await axios.post(`${BASE_URL}/reserve`, {
          user
        })
      }


const handleChange = (event) => {
  const { id, value } = event.target;
  let newUser = {...user}
  switch (id) {
    case 'name':
      newUser.name = value;
      setUser(newUser);
      break;
    case 'email':
      newUser.email = value;
      setUser(newUser);
      break;
    default:
  }
};

      return (
        <div className="rideDetails">
          <div >
            <h2>Reserve Ride Queue Position</h2>
          </div>
          <Search onChange={handleChange} onSubmit={postUser}/>
          {showDetails}
        </div>
      )
  }
export default UserRide