import React from 'react';
import './assets/normalize.css';
import './assets/flexboxgrid.css';
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import CharactersPage from './Pages/Characters/CharactersPage';
import AboutPage from './Pages/About/AboutPage';

const App = () => (
  <div className="App">
    <Router>
      <header className="header">
        <div className="row">
          <div className="col-md-12">
            <div className="header__nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/characters">Characters</NavLink>
              <NavLink to="/about">About</NavLink>
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
