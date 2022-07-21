import './App.css';
import { Routes, Route } from 'react-router-dom'
import Test from './components/Test'

function App() {
  return (
    <div className="App">
      <h1>This is working</h1>
      <Routes>
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;
