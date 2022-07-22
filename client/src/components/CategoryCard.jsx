import { useNavigate } from "react-router-dom";

const CategoryCard = (props) => {

  let navigate = useNavigate();

  const showCategory = (category) => {
    navigate(`/view/rides/${category._id}`);
  };

  return (
    <div className="category-card grid">
      {
        props.categories.map((category, index) => (
          <div key={category._id} className="card" onClick={() => { showCategory(category); }}>
            <div className="img-wrapper">
              <img src={category.img} alt={`${category.type} example image`} />
            </div>
            <div className="info-wrapper flex-col">
              <h3>{category.type}</h3>
              <p>Intensity: {category.intensity}</p>
              <p>Nausea level: {category.nausea}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default CategoryCard;
