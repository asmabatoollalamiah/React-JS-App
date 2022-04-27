import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import HeaderPage from './pages/HeaderPage';
import FooterPage from './pages/FooterPage';
import NavPage from './pages/NavPage';
import PostPage from './pages/PostPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link }  from "react-router-dom";

function Home() {
  return (
    <React.Fragment className="App">
     <HeaderPage className="header-img"></HeaderPage>
     <div>
     <MainPage className="section-main"></MainPage>
     <NavPage className="section-nav"></NavPage>
     </div>
     <FooterPage className="footer-div"></FooterPage>
    </React.Fragment>
  );
}

export default Home;
