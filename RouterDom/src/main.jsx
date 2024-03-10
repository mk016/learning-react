import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import App from './App.jsx';
import './index.css';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Header from './Components/Header/Header.jsx';
import User from './Components/User/User.jsx';
import Github, { githubInfoLoader } from './Components/Github/Github.jsx';

const router = (
  <Router> {/* Wrap your routes with Router */}
    <Layout>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />
    </Layout>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>,
  document.getElementById('root')
);
