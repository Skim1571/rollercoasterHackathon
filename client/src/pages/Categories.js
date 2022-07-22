import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RideCard from '../components/RideCard'
import RideDetails from './RideDetails'

const BASE_URL = 'http://localhost:3001'

const Categories = (props) => {
  const [categoriesId, setCategoryId] = useState(false)
  const [rides, setRide] = useState([])

  let { categoryId } = useParams()

  useEffect(() => {
    const rideByCategory = async () => {
      let res = await axios.get(`${BASE_URL}/rides`)
      setRide(res.data)
      setCategoryId(true)
    }
    rideByCategory()
  }, [categoryId])

  let rideCardReturned

  if (categoriesId) {
    let newCard = []
    rides.forEach((ride) => {
      if (categoryId === ride.category) {
        newCard.push(ride)
      }
    })
    rideCardReturned = <RideCard rides={newCard} />
  }
  return <div className="ride-container">{rideCardReturned}</div>
}

export default Categories
