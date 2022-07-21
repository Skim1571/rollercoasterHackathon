import { useEffect, useState } from 'react'
import RideCard from '../components/RideCard'
import Search from '../components/Search'
import axios from 'axios'
import CategoryCard from '../components/CategoryCard'


const Home = () => {
  const [category, setCategories] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const BASE_URL = 'http://localhost:3001'

useEffect(()=>{
  const getCategories = async () => {
    let res = await axios.get(`${BASE_URL}/categories`)
    setCategories(res.data)}
    getCategories()
  },[])

  const handleChange = (event) => {
    setSearchQuery( event.target.value)
  }
  
  const getSearchResults = async (event) => {
    event.preventDefault()
    let res = await axios.get(`${BASE_URL}/rides`)
    console.log(`searchresults`, res)
    setSearchResults(res.data)
    toggleSearched(true)
  }
  
let rideCard
let categoryCard

if (searched){
  rideCard = <RideCard rides={searchResults}/>
  categoryCard = <CategoryCard categories={category}/>
}

  return (
    <div>
      <div className="search">
        <Search 
        onChange={handleChange}
        onSubmit={getSearchResults}
        />
        </div>
      <div className="categories">
        <h2>Ride Categories</h2>
        <section className="container-grid">
          {categoryCard}
        </section>
      </div>
      <div>
        <h2>Search Results</h2>
        {rideCard}
      </div>
    </div>
  )
}

export default Home
