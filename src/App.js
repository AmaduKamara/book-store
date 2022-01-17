import { Outlet } from 'react-router-dom';
import './inxed.css';
import Books from './pages/Books';

function App() {
  return (
    <div className="container">
      <Books />
      <Outlet />
    </div>
  );
}

export default App;
