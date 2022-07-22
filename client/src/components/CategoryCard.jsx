import { useNavigate } from "react-router-dom";

const CategoryCard = (props) => {

  let navigate = useNavigate();

  const showCategory = (category) => {
    navigate(`/view/rides/${category._id}`);
  };

  const categoryImageArray = [
    'https://imgs.search.brave.com/g1ZZ_DNFx4MY2p_NJoFokN6XaoM1_uGe3VLWu_tKRCs/rs:fit:1200:836:1/g:ce/aHR0cHM6Ly93d3cu/bW9udGdvbWVyeWNv/dW50eW1kLmdvdi9y/ZWMvUmVzb3VyY2Vz/L0ltYWdlcy9pU3Rv/Y2stMTU3NTgxNzk0/XzEuanBn',
    'https://www.screammachine.net/SLAS/01211006.jpg',
    'https://imgs.search.brave.com/jmjb7cQgnXieBl5laayO9MB8El39GBKEck0yLWeqBOQ/rs:fit:1200:1200:1/g:ce/aHR0cDovL2NvYXN0/ZXJmb3JjZS5jb20v/ZGV2L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzExL1NrYXR0/ZW9lbkRqdXJzU29t/bWVybGFuZDItMS5q/cGc',
    'https://imgs.search.brave.com/BGLsBkP45z3ZPr72QYWTY4k6xy08dLQfv-ku-aTUP_Y/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ibG9n/cy5tZXJjdXJ5bmV3/cy5jb20vZWF0LWRy/aW5rLXBsYXkvZmls/ZXMvMjAxNS8wNy9i/bG9nLXJvYXJjb2Fz/dGVyLmpwZw',
    'https://imgs.search.brave.com/5YGNTGaC6VWI0DNMH_TpsozI8IPdM3Gpe2xkGGmGin4/rs:fit:600:400:1/g:ce/aHR0cHM6Ly93ZWVr/ZW5kZXIuY29tLnNn/L2VudGVydGFpbm1l/bnQvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDcvc2h1dHRl/cnN0b2NrXzE0NjE4/NzE3MC5qcGc'
  ];

  return (
    <div className="category-card grid">
      {
        props.categories.map((category, index) => (
          <div key={category._id} className="card" onClick={() => { showCategory(category); }}>
            <div className="img-wrapper">
              <img src={categoryImageArray[index]} alt="image" />
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
