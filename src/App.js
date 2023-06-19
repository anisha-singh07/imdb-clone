import './App.css';

import Home from './pages/Home';


import { routePath } from './constants/route';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './pages/details/MovieDetails'

function App() {
  return (
    <Router>  
      <Routes>
          <Route path={routePath.home} element={<Home />} />
          <Route path={routePath.categories} element={<MovieList />} />
          <Route path={routePath.details} element={<MovieDetails />} />
          <Route path={routePath.invalid} element={<h2>Error Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
