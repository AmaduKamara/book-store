import { Routes, Route } from 'react-router-dom';
import './inxed.css';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes className="container">
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
