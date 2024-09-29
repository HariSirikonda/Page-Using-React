import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import About from './components/AboutUs';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
