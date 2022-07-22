import React from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import BackButton from '../components/BackButton'

const BASE_URL = 'http://localhost:3001'

const Categories = (props) => {
  let navigate = useNavigate()
  return (
    <div>
      <ul className="category-item">
        <h2 className="ride-type">Ride Type: {props.type}</h2>
        <h3 className="intensity">Intensity Level: {props.intensity}</h3>
        <h3 className="nausea">Nausea Level: {props.type}</h3>
        <img src={props.image_background} />
      </ul>
      <div>
        <CategoryCard />
      </div>
      <BackButton />
    </div>
  )
}

export default Categories
