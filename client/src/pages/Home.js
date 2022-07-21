import { useEffect, useState } from 'react'
// import Search from '../components/Search'


const Home = () => {
  const [category, setCategories] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')


// useEffect(()=>{
//   const getGenres = async () => {
//     let res = await axios.get(`https://api.rawg.io/api/genres?key=${process.env.REACT_APP_RAWG_KEY}`)
//     setGenres(res.data.results)}
//     getGenres()
//   },[])

//   const handleChange = (event) => {
//     setSearchQuery( event.target.value)
//   }
  
//   const getSearchResults = async (event) => {
//     event.preventDefault()
//     let res = await axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&search=${searchQuery}`)
//     setSearchResults(res.data.results)
//     toggleSearched(true)
//   }
  
let rideCard
let categoryCard

// if (searched){
//   rideCard = <RideCard ride={searchResults}/>
//   categoryCard = <CategoryCard category={category}/>
// }

  return (
    <div>
      <div className="search">
        {/* <Search 
        onChange={handleChange}
        onSubmit={getSearchResults}
        /> */}
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {rideCard}
        </section>
      </div>
      <div className="categories">
        <h2>Categories</h2>
        <section className="container-grid">
          {categoryCard}
        </section>
      </div>
    </div>
  )
}

export default Home
