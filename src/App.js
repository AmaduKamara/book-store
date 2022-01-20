import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
