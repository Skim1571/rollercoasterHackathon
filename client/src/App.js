import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Header from './components/Header';
import Home from './pages/Home';
import Categories from './pages/Categories';
import RideDetails from './pages/RideDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='view/rides/:categoryId' element={<Categories />} />
        <Route path='rides/details/:rideId' element={<RideDetails />} />
      </Routes>
    </div>
  );
}

export default App;
