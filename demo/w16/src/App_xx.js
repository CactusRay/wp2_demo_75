import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home_xx from './pages/Home_xx';
import About_xx from './pages/About_xx';
import SingleCocktail_xx from './pages/SingleCocktail_xx';
import Error_xx from './pages/Error_xx';
// import components
import Navbar_xx from './components/Navbar_xx';
function App_xx() {
  return (
    <Router>
      <Navbar_xx/>
      <Routes>
        <Route path='/' element={<Home_xx />} />
        <Route path='/about' element={<About_xx />} />
        <Route path='/cocktail/:id' element={<SingleCocktail_xx />} />
        <Route path='*' element={<Error_xx />} />
      </Routes>
    </Router>
  );
}

export default App_xx;
