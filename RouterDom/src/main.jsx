import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import BrowserRouter and Route

import App from './App.jsx';
import './index.css';
import Layout from './Layout.jsx';
import Home from './Compnents/Home/Home.jsx'
import About from './Compnents/About/About.jsx'
import Contact from './Compnents/Contact/Contact.jsx'
import Header from './Compnents/Header/Header.jsx';
import User from './Compnents/User/User.jsx'
import Github from './Compnents/Github/Github.jsx'

const router = (
  <Router>
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
