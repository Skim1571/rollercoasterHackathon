import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
  const [category, setCategories] = useState([]);
  const BASE_URL = 'http://localhost:3001';

  useEffect(() => {
    const getCategories = async () => {
      let res = await axios.get(`${BASE_URL}/categories`);
      setCategories(res.data);
    };
    getCategories();
  }, []);

  return (
    <div>
      <div className="categories">
        <h2>Ride Categories</h2>
        <CategoryCard categories={category} />
      </div>
    </div>
  );
};

export default Home;
