import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CategoryCard from '../components/CategoryCard'
import RideCard from '../components/RideCard'
import RideDetails from './RideDetails'

const BASE_URL = 'http://localhost:3001'

const displaytest = () => {
  ;<div>`This page is connected`</div>
}
displaytest()

const Categories = () => {
  const [categoryId, setCategoryId] = useState(false)
  const [ride, setRide] = useState([])

  let { categoryType } = useParams()

  useEffect(() => {
    const rideByCategory = async () => {
      let res = await axios.get(`${BASE_URL}/components/RideCard`)
      setRide(res.data.results)
      setCategoryId(true)
    }
    rideByCategory()
  }, [categoryType])

  let rideCardReturned

  if (categoryId) {
    rideCardReturned = <RideCard rides={ride} />
  }
  return <div className="ride-container">{rideCardReturned}</div>
}

export default Categories
