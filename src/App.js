import React, { useEffect } from 'react';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import Widgets from './components/Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './db';
import { Outlet, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? <Login /> : (
      <div className='app_body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div> 
      )}
      </div>
  );
}

export default App;
