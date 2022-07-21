import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Header from './components/Header'
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <Header />
      <h1>This is working</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
