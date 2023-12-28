import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/screens/home/Home';
import Layout from './components/layout/layout';


ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

