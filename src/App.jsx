import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from './components/Templates/Template';
import Lessons from './pages/lessons/Lessons';
import MyLessons from './pages/myLessons/MyLessons';
import SearchResults from './pages/searchResults/SearchResults';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path='/' element={<Lessons />} />
          <Route path='/MyLessons' element={<MyLessons />}/>
          <Route path='/Blog' />
          <Route path='/searchResults' element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
