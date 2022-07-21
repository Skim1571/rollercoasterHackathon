import { useNavigate } from "react-router-dom"

const CategoryCard = (props) => {

  let navigate = useNavigate()

  const showCategory = (category) => {
    navigate(`/view/rides/${category.id}`)
  }

  return (
    <div className="category-card grid">
      {
        props.categories.map((category) => (
          <div key={category._id} className="card" onClick={() => { showCategory(category) }}>
            <div className="img-wrapper">
              <img src={category.image_background} alt="image" />
            </div>
            <div className="info-wrapper flex-col">
              <h3>{category.type}</h3>
              <p>{category.intensity}</p>
              <p>{category.nausea}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CategoryCard
