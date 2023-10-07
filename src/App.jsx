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
import CreateLessonForm from './pages/createLessonForm/CreateLessonForm';
import { authActions } from './store/services/auth';
import { getUserDataFromLocalStorage } from './utils/storage';
import MyUploadedLessons from './pages/myUploadedLessons/MyUlpoadedLessons';

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
            <Route path='/createLesson' element={<CreateLessonForm />}/>
            <Route path='/myUploadedLessons' element={<MyUploadedLessons />}/>
            {/* <Route path='/registration' element={<RegistrationForm />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
