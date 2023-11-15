import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { navItems } from '../utils/constants';
import AboutMe from './AboutMe';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import Home from './Home';
import StarWars from './StarWars';

const Main = () => {

  return (
    <Routes>
      {["/", navItems[0].route, `${navItems[0].route}/:hero`].map(path =>
        <Route key={path} path={path} element={<Home />} />)}
      {[navItems[1].route, `${navItems[1].route}/:hero`].map(path =>
        <Route key={path} path={path} element={<AboutMe />} />)}
      <Route path={`${navItems[2].route}/*`} element={<StarWars />} />
      <Route path={`${navItems[3].route}/*`} element={<Contact />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )

}

export default Main