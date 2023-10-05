import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Template from './components/Templates/Template';
import Lessons from './pages/lessons/Lessons';
import MyLessons from './pages/myLessons/MyLessons';
import SearchResults from './pages/searchResults/SearchResults';
import store from './store';
import SignUpForm from './pages/signUpForm/SignUpForm';
import { authActions } from './store/services/auth';
import { getUserDataFromLocalStorage } from './utils/storage';

function App() {
  useEffect(() => {
    const userData = getUserDataFromLocalStorage();
    if (userData) {
      store.dispatch(authActions.setState(userData));
    }
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Template />}>
            <Route path='/' element={<Lessons />} />
            <Route path='/MyLessons' element={<MyLessons />}/>
            <Route path='/searchResults' element={<SearchResults />} />
            <Route path='/signup' element={<SignUpForm />}/>
            {/* <Route path='/registration' element={<RegistrationForm />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
