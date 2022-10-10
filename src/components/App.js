import React from 'react';
import './App.css';
import Header from './Header.js';
import FirstApi from './FirstApi';
import Popup from './Popup';
import CommentApi from './CommentApi';

function App() {
  return (
    <>
    <Header />
    <FirstApi />
    <Popup />
    <CommentApi />
    </>
  )
}

export default App