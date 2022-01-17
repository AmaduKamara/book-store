import { Outlet } from 'react-router-dom';

import Books from './pages/Books';

function App() {
  return (
    <>
      <Books />
      <Outlet />
    </>
  );
}

export default App;
