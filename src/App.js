import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import HeaderPage from './pages/HeaderPage';
import FooterPage from './pages/FooterPage';
import NavPage from './pages/NavPage';
import FullPostPage from './pages/FullPostPage';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Link }  from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/homepage" element={<NavPage/>}/>
          <Route path="/fullpostpage" element={<FullPostPage/>}/>
          </Routes>
          </Router>
    </div>
  );
}

export default App;
