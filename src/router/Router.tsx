import React, { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import User from '../pages/User';
import Game from '../pages/Game';
import Rules from '../pages/Rules';
import Leaders from '../pages/Leaders';

import Layout from '../components/Layout';

import * as Axios from '../api/axiosApi';

import '../styles/router.css';

const AppRouter: React.FC = () => {

  const [user, setUser] = useState<{
    id: string;
    email: string;
    username: string;
    gamestate: {};
  } | null>(null);

  interface UserCredentials {
    email?: string;
    username?: string;
    password: string;
  }

  interface UserData {
    id: string;
    email: string;
    username: string;
    gamestate: {}; // Look at how to properly describe this objecy
  }

  async function fetchGetUser(credentials: UserCredentials): Promise<void> {
    console.log('User credentials in fetch:', credentials);
    try {
      const userData: UserData = await Axios.getUser(credentials);
      console.log('UserData in fetch:', userData);
      setUser(userData);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  function handleGetUser(credentials: UserCredentials) {
    // Logic for handling user login
    console.log('User credentials in handler:', credentials);
    fetchGetUser(credentials);

    // I don't think this will be necessary:
    // setUser({ username: credentials.username || '', email: credentials.email || '' });
  }

  function handleUpdateUser() {
    // Logic for handling user update
    console.log('User updated');
  }

  function handleCreateUser() {
    // Logic for handling user creation
    console.log('User created');
  }

  useEffect(() => {
    // Maybe this will just be a localStorage login
    const storedUser = localStorage.getItem('accordion_user');
   
    if (storedUser) {
      const userCredentials = JSON.parse(storedUser);
      fetchGetUser(userCredentials);
    } else {
      // If no user is stored, you might want to redirect to the login page or show a message
      console.log('No user found in localStorage');
      // Set user object to empty strings and an empty game array,
      // so a user can play without logging in, it just won't save their game or scores
      // Or set the userName to 'Welcome', 'guest', or something appropriate
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/user"
        element={<Layout><User onLogin={handleGetUser} /></Layout>}
      />
      <Route path="/game" element={<Layout><Game /></Layout>} />
      <Route path="/rules" element={<Layout><Rules /></Layout>} />
      <Route path="/leaders" element={<Layout><Leaders /></Layout>} />
    </Routes>
  );
};

export default AppRouter;
